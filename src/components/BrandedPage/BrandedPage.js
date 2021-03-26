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
    let cityData = arrCity[0][0].data.request[0].query

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

    let chartData = {
        cityName: {
            city: cityData,
            label: filteredMonthNum,
            tempData: avgTempData,
            humidity: avgHumidityData
        }

    }
    console.log(chartData)
}

monthData(ArubaAllYears)

const BrandedPage = () => {
    return (
        <div>
        </div>
    )
};

export default BrandedPage;