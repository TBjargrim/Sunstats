import React from "react";
import { Line } from 'react-chartjs-2';
import { Aruba2017, Aruba2018, Aruba2019 } from '../CachedData/DataAruba';
import { Stockholm2017, Stockholm2018, Stockholm2019 } from '../CachedData/DataStockholm';

const ArubaAllYears = [Aruba2017, Aruba2018, Aruba2019];
const StockholmAllYears = [Stockholm2017, Stockholm2018, Stockholm2019];


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
            sumArr.push(avgSum.toFixed(1))
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
                borderColor: 'rgb(225, 195, 41)',
                backgroundColor: 'rgba(0,0,0,0.1)',
                fill: false
            },
            {
                label: 'Stockholm',
                data: avgTempSthlm,
                borderColor: 'rgb(61, 165, 217)',
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

export const Stockholm = monthDataTemp(StockholmAllYears).datasets[0].data
// export const StockholmAvgTemp = Stockholm.datasets[0].data
console.log(Stockholm)
const Aruba = monthDataTemp(ArubaAllYears)
export const ArubaAvgTemp = Aruba.datasets[0].data
// console.log(StockholmAvgTemp)

const Temp = (props) => {
    return (
        <div>
            <Line
                data={monthDataTemp(props.data, props.city)}
                width={600}
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