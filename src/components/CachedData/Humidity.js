
import React, { useState } from "react";
import { Line, Bar } from 'react-chartjs-2';

import { Aruba2017, Aruba2018, Aruba2019 } from '../CachedData/DataAruba';
import { Tokyo2017, Tokyo2018, Tokyo2019 } from '../CachedData/DataTokyo';
import { Paris2017, Paris2018, Paris2019 } from '../CachedData/DataParis';
import { Stockholm2017, Stockholm2018, Stockholm2019 } from '../CachedData/DataStockholm';
import { Barcelona2017, Barcelona2018, Barcelona2019 } from '../CachedData/DataBarcelona';

// Add all yearArrays together to one array - to simplify the data comparison
const ArubaAllYears = [Aruba2017, Aruba2018, Aruba2019];
const TokyoAllYears = [Tokyo2017, Tokyo2018, Tokyo2019];
const ParisAllYears = [Paris2017, Paris2018, Paris2019];
const StockholmAllYears = [Stockholm2017, Stockholm2018, Stockholm2019];
const BarcelonaAllYears = [Barcelona2017, Barcelona2018, Barcelona2019];

export const cityHistoric = {
    'Aruba': [...ArubaAllYears],
    'Tokyo': [...TokyoAllYears],
    'Paris': [...ParisAllYears],
    'Barcelona': [...BarcelonaAllYears],
    'Stockholm': [...StockholmAllYears]
}
// console.log(cityHistoric)

const monthDataHumidity = (arrCity, city) => {

    let humidityData = []
    for (let i = 0; i < arrCity.length; i++) {
        let filteredHumidity = arrCity[i].map(item => parseInt(item.data.weather[0].hourly[0].humidity))

        humidityData.push(filteredHumidity);
    }

    let SthlmHumidityData = []

    for (let i = 0; i < StockholmAllYears.length; i++) {

        let StockholmHumidity = StockholmAllYears[i].map(item => parseInt(item.data.weather[0].hourly[0].humidity))

        SthlmHumidityData.push(StockholmHumidity);
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
            sumArr.push(avgSum.toFixed(1))
        };
        return sumArr;
    }

    const avgHumidityData = (sumArray(humidityData));
    const avgHumiditySthlm = (sumArray(SthlmHumidityData));

    const chartData = {
        labels: filteredMonthNum,
        datasets: [{
            label: city,
            data: avgHumidityData,
            borderColor: 'rgb(149, 224, 170)',
            backgroundColor: 'rgba(0,0,0,0.1)',
            fill: false
        },
        {
            label: 'Stockholm',
            data: avgHumiditySthlm,
            borderColor: 'rgb(61, 165, 217)',
            backgroundColor: 'rgba(0,0,0,0.1)',
            fill: false

        }
        ]
    }
    return chartData
}
// console.log(monthDataHumidity(StockholmAllYears))

const city = (arrCity) => {
    const cityData = arrCity[0][0].data.request[0].query
    return cityData
}

const TestHumidity = (props) => {
    return (
        <div>
            <Line
                data={monthDataHumidity(props.data, props.city)}
                width={600}
                height={500}
                options={{
                    maintainAspectRatio: true,
                    responsive: true,
                    // title: { text: city(props.data), display: true },
                    title: { text: 'Luftfuktighet', display: true },
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

export default TestHumidity