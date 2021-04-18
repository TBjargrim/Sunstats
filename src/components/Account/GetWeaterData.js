import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import sunset_icon from '../../Images/sunset_icon.png'
import sunrise_icon from '../../Images/sunrise_icon.png'
import { FaHeart } from 'react-icons/fa';

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
min-width:250px;
h2{
font-size: 24px;
}
h4{
    font-size: 24px;
}
h4 span {
}
`;
const Styledh4 = styled.h4`
position:absolute;
display:flex;
font-size: 74px;
span{
    font-size: 14px;
}
`
const WeatherIcon = styled.img`
border-radius:50%;
width:100px;
`

const GetWeatherData = () => {
    const [fetchAPI, setFetchAPI] = useState([])

    let savedFav = JSON.parse(localStorage.getItem('favorites'));

    // function reloadThePage() {
    //     window.location.reload();
    // }

    // window.location.reload();
    const WeatherData = () => {
        let newArr = [];

        let cityObj = {
            city: '',
            temp: 0,
            sunrise: '',
            sunset: '',
            icon: '',
        }
        for (let i = 0; i < savedFav.length; i++) {
            // URL = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=ec735448d26149ab9c7183714211504&format=json&num_of_days=1&q=${savedFav[i]}`

            axios
                .get(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=ec735448d26149ab9c7183714211504&format=json&num_of_days=1&q=${savedFav[i]}`)
                .then(res => {
                    console.log(res)
                    let cityYo = res.data.data.request[0].query;
                    let tempYo = parseInt(res.data.data.current_condition[0].FeelsLikeC)
                    let sunriseYo = res.data.data.weather[0].astronomy[0].sunrise
                    let sunsetYo = res.data.data.weather[0].astronomy[0].sunset
                    let iconYo = res.data.data.current_condition[0].weatherIconUrl[0].value
                    console.log(iconYo)
                    cityObj.city = cityYo.split(',')[0]; //Take away the country name and only shows the city-name.
                    cityObj.temp = tempYo
                    cityObj.sunrise = sunriseYo
                    cityObj.sunset = sunsetYo
                    cityObj.icon = iconYo
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


        // const interval = setInterval(() => {
        //     WeatherData()
        // }, 10000)
        // return () => clearInterval(interval)
    }, [])
    return (
        <>
            <StyledDiv>
                <ul>
                    {console.log(fetchAPI)}
                    {fetchAPI.map(obj => <li key={obj.city}>
                        {/* {console.log(fetchAPI)} */}
                        <CityCard>
                            <FaHeart style={{ color: 'red' }} />
                            <h2>{obj.city}</h2>

                            <Styledh4><span>Just nu</span> {obj.temp} ºC</Styledh4>
                            <WeatherIcon src={obj.icon} />
                            <div>
                                <img src={sunrise_icon} />
                                <h4>{obj.sunrise}</h4>
                                <img src={sunset_icon} />
                                <h4>{obj.sunset}</h4>
                            </div>

                        </CityCard>
                    </li>)}
                </ul>
            </StyledDiv>
        </>)

}
export default GetWeatherData
