import React, { useState } from "react";
import { Line } from 'react-chartjs-2';

// Importing the data from separete fils - containging cached api data (three years)
import { Aruba2017, Aruba2018, Aruba2019 } from '../CachedData/DataAruba';
import { Tokyo2017, Tokyo2018, Tokyo2019 } from '../CachedData/DataTokyo';

// Add all yearArrays together to one array - to simplify the data comparison
const ArubaAllYears = [Aruba2017, Aruba2018, Aruba2019];
const TokyoAllYears = [Tokyo2017, Tokyo2018, Tokyo2019];

//Make a function that takes the AllYears array as an argument for counting average temp and humidity.
const monthData = (arrCity) => {

  //Making varibles for the collected data, humidity and temp data.
  let humidityData = []
  let tempData = []
  //Looping through the AllYear Array.
  for (let i = 0; i < arrCity.length; i++) {
    //Take each Year Array and map it to collect the temp and humidity
    let filteredTemp = arrCity[i].map(temp => parseInt(temp.data.weather[0].avgtempC))
    let filteredHumidity = arrCity[i].map(item => parseInt(item.data.weather[0].hourly[0].humidity))
    //We push the collected data in to our empty arrays at the top.
    tempData.push(filteredTemp);
    humidityData.push(filteredHumidity);
  }
  //Map through the data to get the numbers of each month, (ex. for jan -01-) and save it to filteredMonthNum.
  let filteredMonthNum = arrCity[0].map(item => item.data.weather[0].date.slice(4, 8))

  //get -01- to -12-, and replace that with jan-dec.
  let labelMonths = filteredMonthNum.splice(0, 12); //returns the array with the items removed but has removed it from filteredMonthNum, not used but might be good in the future
  filteredMonthNum.push('Jan', 'Feb', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dec');

  //Function for calculating average temp and humidity.
  const sumArray = (array) => {
    const newArray = [];
    array.forEach(sub => {
      sub.forEach((num, index) => {
        //go through our Data that we put in as an argument, one by one (index)
        if (newArray[index]) {
          //The addition assignment operator (+=) 
          // adds the value of the right operand to a variable 
          // and assigns the result to the variable.
          // Operator: x += y
          // Meaning:  x  = x + y
          newArray[index] += num;
        }
        else {
          newArray[index] = num;
        }
      });
    });
    //sumArr is an empty array that will hold the summarize of the added temp and humidity that we now divid by 3 (the number of years of data we collected).
    let sumArr = [];
    for (var i = 0; i < newArray.length; i++) {
      let avgSum = newArray[i] / 3
      sumArr.push(avgSum.toFixed(1))
    };
    return sumArr;
  }
  //making two varibles for setting the tempData and humidityData as arguments to the sumArray function.
  const avgTempData = (sumArray(tempData));
  const avgHumidityData = (sumArray(humidityData));

  //Testing chart.js, making an object with values from the functions above.
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
//Making function to get the city name and saving it to a varible.
const city = (arrCity) => {
  const cityData = arrCity[0][0].data.request[0].query
  return cityData
}

monthData(TokyoAllYears)
city(TokyoAllYears)

monthData(ArubaAllYears)
city(ArubaAllYears)
// how to push in a value and use as an argument?
// spread the "AllaResmålVing" array and somehow make it in to the jsx

const CollectedData = () => {

  return (
    <div>
      <Line
        data={monthData(TokyoAllYears)}
        options={{
          responsive: true,
          title: { text: city(TokyoAllYears), display: true },
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

export default CollectedData;