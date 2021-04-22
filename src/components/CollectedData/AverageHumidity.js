import React from "react";
import { Line } from 'react-chartjs-2';
import { Stockholm2017, Stockholm2018, Stockholm2019 } from '../CachedData/DataStockholm';
const StockholmAllYears = [Stockholm2017, Stockholm2018, Stockholm2019];

const monthDataHumidity = (arrCity, city) => {

    let humidityData = []
    for (let i = 0; i < arrCity.length; i++) {
        let filteredHumidity = arrCity[i].map(item => parseInt(item.data.weather[0].hourly[0].humidity))
        // console.log(arrCity[i]);
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
// console.log(monthDataHumidity(StockholmAllYears))

const city = (arrCity) => {
    const cityData = arrCity[0][0].data.request[0].query
    return cityData
}

const Humidity = (props) => {
    return (
        <div>
            <Line
                data={monthDataHumidity(props.data, props.city)}
                width={500}
                height={400}
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

        </div>
    )
}

export default Humidity