import React from "react";
import { Line } from 'react-chartjs-2';
import { Stockholm2017, Stockholm2018, Stockholm2019 } from '../CachedData/DataStockholm';
const StockholmAllYears = [Stockholm2017, Stockholm2018, Stockholm2019];

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

    let labelMonths = ['Jan', 'Feb', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dec'];
    const chartData = {
        labels: labelMonths,
        datasets: [{
            label: city,
            data: avgHumidityData,
            borderColor: 'rgb(80, 215, 102)',
            backgroundColor: 'rgba(0,0,0,0.1)',
            fill: false
        },
        {
            label: 'Stockholm',
            data: avgHumiditySthlm,
            borderColor: 'rgb(165, 165, 165)',
            backgroundColor: 'rgba(0,0,0,0.1)',
            fill: false
        }
        ]
    }
    return chartData
}

const Humidity = (props) => {
    return (
        <>
            <Line
                data={monthDataHumidity(props.data, props.city)}
                width={500}
                height={400}
                options={{
                    maintainAspectRatio: true,
                    responsive: true,
                    title: { text: 'Luftfuktighet', display: true },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 12,
                                    beginAtZero: false
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
export default Humidity