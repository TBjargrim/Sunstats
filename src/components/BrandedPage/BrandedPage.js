import React, { useState } from "react";
import { Line } from 'react-chartjs-2';

import { Aruba2017, Aruba2018, Aruba2019 } from '../CachedData/DataAruba';

const ArubaAllYears = [Aruba2017, Aruba2018, Aruba2019];

const monthData = (arrCity) => {

    let humidityData = []
    let tempData = []

    for (let i = 0; i < arrCity.length; i++) {
        let filteredTemp = arrCity[i].map(temp => parseInt(temp.data.weather[0].avgtempC))
        let filteredHumidity = arrCity[i].map(item => parseInt(item.data.weather[0].hourly[0].humidity))
        tempData.push(filteredTemp);
        humidityData.push(filteredHumidity);
    }
    let filteredMonthNum = arrCity[0].map(item => item.data.weather[0].date.slice(4, 8))

    //get -01- to -12-, i want to replace that with jan-dec.
    let labelMonths = filteredMonthNum.splice(0, 12); //returns the array with the items removed but has removed it from filteredMonthNum
    console.log(labelMonths)
    filteredMonthNum.push('Jan', 'Feb', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dec');
    console.log(filteredMonthNum)

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
            sumArr.push(avgSum.toFixed(1))
        };
        return sumArr;
    }

    let avgTempData = (sumArray(tempData));
    let avgHumidityData = (sumArray(humidityData));

    const chartData = {
        labels: filteredMonthNum,
        datasets: [{
            label: 'Temp',
            data: avgTempData,
            borderColor: 'rgb(238, 130, 238)',
            backgroundColor: 'rgba(0,0,0,0.1)',
            fill: false

        }, {
            label: 'Luftfuktighet',
            data: avgHumidityData,
            borderColor: 'rgb(60, 179, 113)',
            backgroundColor: 'rgba(0,0,0,0.1)',
            fill: false
        }]

    }
    return chartData

}
const city = (arrCity) => {
    const cityData = arrCity[0][0].data.request[0].query
    return cityData
}

monthData(ArubaAllYears)
city(ArubaAllYears)

const BrandedPage = () => {

    return (
        <div>
            <Line
                data={monthData(ArubaAllYears)}
                options={{
                    responsive: true,
                    title: { text: city(ArubaAllYears), display: true },
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
};

export default BrandedPage;