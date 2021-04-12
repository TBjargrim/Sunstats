import React from 'react'
import { Bubble } from 'react-chartjs-2';


// return chartData


const TestBubble = ({ date }) => {

    // function collectSelection({ startDate, setSaveDate }) {
    //     let choosenMonthCitys = []
    //     let parent = document.getElementsByClassName("react-datepicker__input-container")
    //     let obj = Object.keys(parent)[0];
    //     let value = parent[obj];
    //     let tagInp = value.getElementsByTagName("input")[0];
    //     let res = tagInp.value;
    //     choosenMonthCitys.push(setSaveDate(res));

    // }
    // console.log(collectedSelection())
    //Get the selectedDate from setSaveDate from Calender
    //Get all the citys from then and display them in a bubblechart
    const chartBubbleData = {
        // labels: ,
        datasets: [{
            label: date,
            data: [{ x: 5, y: 10, r: 10 }, { x: 15, y: 3, r: 15 }, { x: 7, y: 15, r: 30 }, { x: 25, y: 5, r: 10 }, { x: 5, y: 10, r: 10 }],
            borderColor: 'rgb(238, 130, 238)',
            backgroundColor: 'rgba(0,0,0,0.1)',
            fill: false

        }]

    }
    return (
        <div>
            <Bubble
                data={chartBubbleData}
                width={500}
                height={250}
                options={{
                    maintainAspectRatio: true,
                    responsive: true,
                    //    title: { text: city(props.data), display: true },
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

export default TestBubble
