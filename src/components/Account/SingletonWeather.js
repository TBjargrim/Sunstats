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
width: 220px;
/* border: 1px solid orange; */
display: flex;
flex-wrap: wrap;
h2{
font-size: 20px;
/* border: 1px solid green; */
width: 100%;
}
h4{
    font-size: 20px;
    /* border: 1px solid blue; */
    margin: 0;
}
h4 span {
    /* border: 1px solid yellow; */
}
`;

const Temp = styled.div`
width: 100%;
border-radius: 10px;
padding: 5px;
/* border: 1px solid black; */
display: flex;
background-color: white;
img{
border-radius:50%;
width:50px;
/* border: 1px solid purple;   */
}
h4{
font-size: 22px;
margin-right: 15px;
}
span{
    font-size: 20px;
    
}
`

const SunriseSunset = styled.div`
width: 100%;
margin: 0;
text-align: center;
/* border: 1px solid red; */
h4:first-child{
color: yellow;
}
`


const SingletonWeather = (props) => {
  const [data, setData] = useState(false)

  useEffect(() => {
    axios
      .get(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=ec735448d26149ab9c7183714211504&format=json&num_of_days=1&q=${props.city}`)
      .then(res => {
        const cityObj = {}
        let cityYo = res.data.data.request[0].query;
        let tempYo = parseInt(res.data.data.current_condition[0].FeelsLikeC)
        let sunriseYo = res.data.data.weather[0].astronomy[0].sunrise
        let sunsetYo = res.data.data.weather[0].astronomy[0].sunset
        let iconYo = res.data.data.current_condition[0].weatherIconUrl[0].value
        cityObj.city = cityYo
        // .split(',')[0]; //Take away the country name and only shows the city-name.
        cityObj.temp = tempYo
        cityObj.sunrise = sunriseYo
        cityObj.sunset = sunsetYo
        cityObj.icon = iconYo
        setData(cityObj)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);



  return (
    <>
      {data && <li>
        <CityCard>
          <FaHeart style={{ color: 'red' }} />
          <h2>{data.city}</h2>
          <Temp>
            <h4><span>Just nu</span> {data.temp} ºC</h4>
            <img src={data.icon} />
          </Temp>
          <SunriseSunset>
            <img src={sunrise_icon} />
            <h4>{data.sunrise}</h4>
            <img src={sunset_icon} />
            <h4>{data.sunset}</h4>
          </SunriseSunset>

        </CityCard>
      </li>}
    </>);
}

export default SingletonWeather
