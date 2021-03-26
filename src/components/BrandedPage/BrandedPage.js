import { Aruba2017, Aruba2018, Aruba2019 } from '../CachedData/DataAruba';

const ArubaAllYears = [Aruba2017, Aruba2018, Aruba2019];

let VingResor = [];
let Aruba = [];
// let MonthData = {
//     city,
//     avgTemp,
//     humidity,
// };
// {city:cityname, month: month, temp: temp}Pusha in i monthData arr, gör till objekt med månad, temp och humitity

const monthTemp = (arrCity) => {
    let humidityData = []
    let tempData = []
    for (let i = 0; i < arrCity.length; i++) {
        //skapa tre arrayer med temperaturerna/år/månad
        let filteredTemp = arrCity[i].map(temp => parseInt(temp.data.weather[0].avgtempC))
        let filteredHumidity = arrCity[i].map(item => parseInt(item.data.weather[0].hourly[0].humidity))
        tempData.push(filteredTemp);

        humidityData.push(filteredHumidity);
    }
    console.log(tempData)
    console.log(humidityData)

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
    console.log(sumArray(tempData));
    console.log(sumArray(humidityData));
}

console.log(monthTemp(ArubaAllYears))

const BrandedPage = () => {
    return (
        <div>
        </div>
    )
};

export default BrandedPage;

    // const arr = [
    //     [43, 2, 21],[1, 2, 4, 54],[5, 84, 2],[11, 5, 3, 1]
    //  ];

    // console.log(MonthData)
    // for (let i = 0; i > MonthData.length; i++) {
    //     let a = MonthData.map(function (value, index) {
    //         return value + MonthData[0][index] + MonthData[1][index] + MonthData[2][index]
    //     })
    //     console.log(a)
    // }
    // let a = MonthData.map(item => console.log(item))
    // console.log(a)


// monthData[0][i] + monthData[1][i] + monthData[2][i]
// var filteredTemp = [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]];

// var array1 = [1, 2, 3, 4];
// var array2 = ["a", "b", "c", "d"];
// var array3 = ["f", "d", "s", "a"];

// var newArray = array1.map(function (value, index) {
//     return value + array2[index] + array3[index];
// });
// console.log(newArray);


// monthData[0][i] + monthData[1][i] + monthData[2][i]

// function avgTemp(arr) {
//     let avgSum;

//     for (var i = 0, sum = 0; i <= arr.length; sum += arr[i++]) {
//         avgSum = sum / arr.length
//     };
//     return avgSum.toFixed(1);
// }
// avgTemp()
// console.log(avgTemp())



//Array av object medeltemp för varje månad, luftfuktighet.
// let VingsTravels: [
//     Aruba: {
//         månad: [
//             jan: {
//                 // månad:jan, 
//                 temp: 26,
//                 luftfuktighet: 88%}{ feb, 27 }, mars, april, maj]
//     }
// ]
// let VingsTravels = []
// let arubaInfo = []

// arubaInfo.push(allMonth,)
// allMonths[
    // {name: name, temp: temp}
//     { månad, temp, luftfuktighet }
    // en loop för att gå igenom datan, ta ut datum, temp och fuktighet. Sen loopa igenom igen och pusha till en arr för att samla stadens data tillsammans
    // I första loopen kommer datan sparas i en arr 