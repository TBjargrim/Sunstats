import React from "react";
import { Line } from 'react-chartjs-2';

import {
    AlanyaAllYears, ArubaAllYears, BarcelonaAllYears, HonoluluAllYears, IbizaAllYears,
    KingstonAllYears, KretaAllYears, ParisAllYears, PhuketAllYears, RhodosAllYears, RomeAllYears, SingaporeAllYears, StockholmAllYears, TokyoAllYears, BaliAllYears
} from './ConstantsCityAllYears'

const monthDataTemp = (arrCity, city) => {

    let tempData = []
    for (let i = 0; i < arrCity.length; i++) {

        let filteredTemp = arrCity[i].map(temp => parseInt(temp.data.weather[0].avgtempC))
        tempData.push(filteredTemp);
    }
    let SthlmTempData = []
    for (let i = 0; i < StockholmAllYears.length; i++) {
        let StockholmTemp = StockholmAllYears[i].map(temp => parseInt(temp.data.weather[0].avgtempC))
        SthlmTempData.push(StockholmTemp);
    }
    let labelMonths = ['Jan', 'Feb', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dec'];
    const sumArray = (array) => {
        const newArray = [];
        array.forEach(sub => {
            sub.forEach((num, index) => {
                if (newArray[index]) {
                    newArray[index] += num;
                }
                else {
                    newArray[index] = num;
                }
            });
        });
        let sumArr = [];
        for (var i = 0; i < newArray.length; i++) {
            let avgSum = newArray[i] / 3
            sumArr.push(avgSum.toFixed(0))
        };
        return sumArr;
    }

    const avgTempData = (sumArray(tempData));
    const avgTempSthlm = (sumArray(SthlmTempData));

    const chartData = {
        labels: labelMonths,
        datasets: [
            {
                label: city,
                data: avgTempData,
                borderColor: 'rgb(51, 176, 238)',
                backgroundColor: 'rgba(0,0,0,0.1)',
                fill: false
            },
            {
                label: 'Stockholm',
                data: avgTempSthlm,
                borderColor: 'rgb(165, 165, 165)',
                backgroundColor: 'rgba(0,0,0,0.1)',
                fill: false,
            }
        ]
    }
    return chartData
}

export const Aruba = monthDataTemp(ArubaAllYears).datasets[0].data
export const Alanya = monthDataTemp(AlanyaAllYears).datasets[0].data
export const Barcelona = monthDataTemp(BarcelonaAllYears).datasets[0].data
export const Honolulu = monthDataTemp(HonoluluAllYears).datasets[0].data
export const Ibiza = monthDataTemp(IbizaAllYears).datasets[0].data
export const Kingston = monthDataTemp(KingstonAllYears).datasets[0].data
export const Kreta = monthDataTemp(KretaAllYears).datasets[0].data
export const Paris = monthDataTemp(ParisAllYears).datasets[0].data
export const Phuket = monthDataTemp(PhuketAllYears).datasets[0].data
export const Rhodos = monthDataTemp(RhodosAllYears).datasets[0].data
export const Rome = monthDataTemp(RomeAllYears).datasets[0].data
export const Singapore = monthDataTemp(SingaporeAllYears).datasets[0].data
export const Tokyo = monthDataTemp(TokyoAllYears).datasets[0].data
export const Bali = monthDataTemp(BaliAllYears).datasets[0].data
export const Stockholm = monthDataTemp(StockholmAllYears).datasets[0].data

const Temp = (props) => {
    return (
        <>
            <Line
                data={monthDataTemp(props.data, props.city)}
                width={500}
                height={400}
                options={{
                    maintainAspectRatio: true,
                    responsive: true,
                    title: { text: 'Medeltemperatur', display: true },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 12,
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: false
                                }
                            }
                        ],
                        xAxes: [
                            {
                                gridLines: {
                                    display: false
                                }
                            }
                        ]
                    }
                }}
            />

        </>
    )
}

export default Temp