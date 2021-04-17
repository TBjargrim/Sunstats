import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components'

// https://stackoverflow.com/questions/56532652/axios-get-then-in-a-for-loop
// https://levelup.gitconnected.com/fetch-api-data-with-axios-and-display-it-in-a-react-app-with-hooks-3f9c8fa89e7b

const StyledDiv = styled.div`
padding: 0;
p {
  font-size: 20px;
  text-align: left;
  margin-left:30px;
}
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}
li {
  text-align: center;
  margin: 5px;
}
`
const CityCard = styled.div`
margin: 0;
padding: 5px;
background-color:#D8DEE3;
border-radius:15px;
h2{
font-size: 18px;
}
`;

const GetWeatherData = () => {
    const [fetchAPI, setFetchAPI] = useState([])
    let savedFav = JSON.parse(localStorage.getItem('favorites'));


    const WeatherData = () => {
        let newArr = [];

        let cityObj = {
            city: '',
            temp: 0,
            sunrise: '',
            sunset: '',
        }
        for (let i = 0; i < savedFav.length; i++) {
            // URL = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=ec735448d26149ab9c7183714211504&format=json&num_of_days=1&q=${savedFav[i]}`

            axios
                .get(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=ec735448d26149ab9c7183714211504&format=json&num_of_days=1&q=${savedFav[i]}`)
                .then(res => {

                    let cityYo = res.data.data.request[0].query;
                    let tempYo = parseInt(res.data.data.current_condition[0].FeelsLikeC)
                    let sunriseYo = res.data.data.weather[0].astronomy[0].sunrise
                    let sunsetYo = res.data.data.weather[0].astronomy[0].sunset
                    cityObj.city = cityYo;
                    cityObj.temp = tempYo
                    cityObj.sunrise = sunriseYo
                    cityObj.sunset = sunsetYo
                    newArr.push({ ...cityObj })
                    setFetchAPI(newArr)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    useEffect(() => {
        WeatherData()
    }, [])


    return (
        <>
            <StyledDiv>
                <ul>
                    {console.log(fetchAPI)}
                    {fetchAPI.map(obj => <li key={obj.city}>
                        {/* {console.log(fetchAPI)} */}
                        <CityCard>
                            <h2>{obj.city}</h2>
                            <h4>Nu är det {obj.temp} grader.</h4>
                            <h4>Solen går upp kl: {obj.sunrise}</h4>
                            <h4>Solen går ner kl: {obj.sunset}</h4>
                        </CityCard>
                    </li>)}
                </ul>
            </StyledDiv>
        </>)

}
export default GetWeatherData
