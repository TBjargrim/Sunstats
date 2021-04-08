import { Aruba2017, Aruba2018, Aruba2019 } from '../CachedData/DataAruba';
import { Tokyo2017, Tokyo2018, Tokyo2019 } from '../CachedData/DataTokyo';
import { Paris2017, Paris2018, Paris2019 } from '../CachedData/DataParis';
import { Stockholm2017, Stockholm2018, Stockholm2019 } from '../CachedData/DataStockholm';
import { Barcelona2017, Barcelona2018, Barcelona2019 } from '../CachedData/DataBarcelona';
import { ArubaAvgTemp, Stockholm } from './Temp'
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

const obj = {
    Aruba: {
        AverageTemp: ArubaAvgTemp,
    },
    Stockholm: {
        AverageTemp: Stockholm,
    },

}
console.log(obj)
// Make a function that looks like month data that takes out the avgtemp and city name.
//Push it in to an array(global) that looks something like this
// const Arr = [
//     Aruba: {
//         AverageTemp:[] //Use the array and choose the index that match the choosen month, loop through and filter just the number/month
//     },
//     Paris:{
//         AverageTemp:[]
//     }
// ]
//Get the user to choose month first to get the citys that have the correct avg temp for that month
export const CollectTemp = (arr) => {

    let AllVingInfo = [];
    //Making data from cityHistoric into an array
    let dataArr = Object.values(cityHistoric)
    let dataCityName = Object.keys(cityHistoric) //Creates an array with all the Citynames
    // console.log(dataCityName)

    for (let i = 0; i < dataArr.length; i++) {
        // console.log(dataArr[i])
        let SeparateCityArr = dataArr[i]
        for (let k = 0; k < SeparateCityArr.length; k++) {
            // console.log(SeparateCityArr[k].map(temp => parseInt(temp.data.weather[0].avgtempC)))
        }

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


    AllVingInfo.push({
        city: dataCityName,
        avgTemp: []
    })
}
CollectTemp(cityHistoric)

// for (let i = 0; i < arrCity.length; i++) {

//     let filteredTemp = arrCity[i].map(temp => parseInt(temp.data.weather[0].avgtempC))
//     tempData.push(filteredTemp);


//Get the data from every city 

