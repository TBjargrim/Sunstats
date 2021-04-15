import React from "react";
import { Line } from 'react-chartjs-2';

import {
    AlanyaAllYears, ArubaAllYears, BarcelonaAllYears, HonoluluAllYears, IbizaAllYears,
    KingstonAllYears, KretaAllYears, ParisAllYears, PhuketAllYears, RhodosAllYears, RomeAllYears, SingaporeAllYears, StockholmAllYears, TokyoAllYears, BaliAllYears
} from './ConstantsCityAllYears'

// const BarcelonaAllYears = [Barcelona2017, Barcelona2018, Barcelona2019];
// const HonoluluAllYears = [Honolulu2017, Honolulu2018, Honolulu2019];
// const IbizaAllYears = [Ibiza2017, Ibiza2018, Ibiza2019];
// const KingstonAllYears = [Kingston2017, Kingston2018, Kingston2019];
// const KretaAllYears = [Kreta2017, Kreta2018, Kreta2019];
// const ParisAllYears = [Paris2017, Paris2018, Paris2019];
// const PhuketAllYears = [Phuket2017, Phuket2018, Phuket2019];
// const RhodosAllYears = [Rhodos2017, Rhodos2018, Rhodos2019];
// const RomeAllYears = [Rome2017, Rome2018, Rome2019];
// const SingaporeAllYears = [Singapore2017, Singapore2018, Singapore2019];
// const StockholmAllYears = [Stockholm2017, Stockholm2018, Stockholm2019];
// const TokyoAllYears = [Tokyo2017, Tokyo2018, Tokyo2019];
// const UbudAllYears = [Ubud2017, Ubud2018, Ubud2019];

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
    let filteredMonthNum = arrCity[0].map(item => item.data.weather[0].date.slice(4, 8))

    let labelMonths = filteredMonthNum.splice(0, 12);
    filteredMonthNum.push('Jan', 'Feb', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dec');

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
        labels: filteredMonthNum,
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


const city = (arrCity) => {
    const cityData = arrCity[0][0].data.request[0].query
    return cityData
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

// console.log(Aruba)
const Temp = (props) => {
    return (
        <div>
            <Line
                data={monthDataTemp(props.data, props.city)}
                width={500}
                height={400}
                options={{
                    maintainAspectRatio: true,
                    responsive: true,
                    title: { text: 'Medeltemperatur', display: true },
                    // city(props.data)
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

        </div>
    )
}

export default Temp