import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";

const CityCard = styled.div`
position: relative;
z-index: 1;
margin: 0;
padding: 5px;
background: #E1E1E1;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.30);
border-radius: 17px;
width: 350px;
height: 200px;
display: flex;
flex-wrap: wrap;
h2{
font-size: 25px;
width: 100%;
text-align: start;
margin-left: 15px;
letter-spacing:1px;
}
img{
border-radius:50%;
width:55px;
position: absolute;
right: 40px;
top: 10px;
z-index: -1;
}
  @media screen and (max-width:980px) {
  width:280px;
  height: 190px;
    h2{
      margin:5px 0 0 5px;
    }
    img{
    width:50px;
    right: 10px;
    }
  }
`;
const Temp = styled.div`
width: 100%;
border-radius: 10px;
padding: 5px;
display: flex;
h4{
width:100%;
font-size: 50px;
margin:0px 15px;
font-weight: 500;
text-align:center;
}
h4 span{
    font-size: 18px;
    font-weight: 400;
}
@media screen and (max-width:980px) {
  h4{
    margin:0;  
    font-size: 30px;
    }
    h4 span{
    font-size: 15px;
}
}
`
const SunriseSunset = styled.div`
width: 100%;
display: flex;
justify-content: center;
h4{
  font-weight: 400;
  font-size: 19px;
  text-transform: lowercase;
}
`
const SunriseIcon = styled(GiSunrise)`
color:#E8CC3B;
font-size: 30px;
margin-top: 20px;
`
const SunsetIcon = styled(GiSunset)`
color:#4F67E2;
font-size: 30px;
margin-top: 20px;
`
const SunWrapper = styled.div`
display: flex;
margin:0 20px;
`
const SingletonWeather = (props) => {
  const [data, setData] = useState(false)

  useEffect(() => {
    axios
      .get(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=06d6da1a9a9c44c78a7115359210906&format=json&num_of_days=1&q=${props.city}`)
      .then(res => {
        const cityObj = {}
        let cityYo = res.data.data.request[0].query;
        let tempYo = parseInt(res.data.data.current_condition[0].FeelsLikeC)
        let sunriseYo = res.data.data.weather[0].astronomy[0].sunrise
        let sunsetYo = res.data.data.weather[0].astronomy[0].sunset
        let iconYo = res.data.data.current_condition[0].weatherIconUrl[0].value
        cityObj.city = cityYo
        cityObj.temp = tempYo
        cityObj.sunrise = sunriseYo
        cityObj.sunset = sunsetYo
        cityObj.icon = iconYo
        setData(cityObj)
      })
      .catch(err => {
        console.log(err)
      })
  }, [props]);

  return (
    <>
      {data && <li>
        <CityCard>
          <h2>{data.city}</h2>
          <img src={data.icon} alt='Bild på vald favorit stad' />
          <Temp>
            <h4><span>Just nu</span> {data.temp} ºC</h4>
          </Temp>
          <SunriseSunset>
            <SunWrapper>
              <SunriseIcon />
              <h4>{data.sunrise}</h4>
            </SunWrapper>
            <SunWrapper>
              <SunsetIcon />
              <h4>{data.sunset}</h4>
            </SunWrapper>
          </SunriseSunset>
        </CityCard>
      </li>}
    </>);
}

export default SingletonWeather