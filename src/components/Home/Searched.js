import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom";
import React, { Component } from "react";
import { Pie, Bar, Bubble, Line } from "react-chartjs-2";
import Chartjs from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
function SearchedPage() {
    return (
        <>
            <Link to='/home'>
            <p>Tillbaka</p>
            </Link>
            <h1>4-17 april</h1>
            <p>Välj en stad för att få mer information</p>
            <Chart />
        </>
    )
}
class Chart extends Component{
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [
                    "Paris",
                    "Rom",
                    "Lissabon",
                    "Berlin",
                    "Amsterdam",
                    "Oslo",
                    "Stockholm",
                    "Köpenhamn",
                ],
             
                datasets: [
                    
                    {
                        label: "Europa",
                        data: [{
                            x: 17,
                            y: 3,
                            r: 20
                            
                        }, {
                            x: 20,
                            y: 4,
                            r: 20
                            
                        },
                        {
                            x: 16,
                            y: 12,
                            r: 20
                        },
                        {
                            x: 14,
                            y:  9,
                            r: 20
                        },
                        {
                            x: 2,
                            y: 15,
                            r: 20
                        },
                        {
                            x: 5,
                            y: 5,
                            r: 30
                        },
                        {
                            x: 8,
                            y: 8,
                            r: 30
                        },
                        {
                            x: 6,
                            y: 8,
                            r: 30
                        }
                        ],
                        backgroundColor: [
                            "rgba(60, 179, 113)",
                            "rgb(255, 99, 71)",
                            "rgb(238, 130, 238)"
                        ],
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className="chart">
                 <Bar
                    data={this.state.chartData}
                    /* width={100}
                    height={50} */
                    options={{
                    maintainAspectRatio: true
                    }}
                    />
            </div>
        )
    }
}
export default SearchedPage;