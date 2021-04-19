import React, { useState } from 'react'
import axios from 'axios';
import styled from "styled-components";
import London from '../../Images/LondonImage.jpg'
import Tokyo from '../../Images/TokyoImage.jpg'
import NY from '../../Images/NYimage.jpg'
import Barcelona from '../../Images/BarcelonaImage.jpg'
import Paris from '../../Images/ParisImage.jpg'

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
h2{
font-size: 18px;
}
`;
const StyledImg = styled.div`
margin: 5px;
img{
  border-radius: 15px;
  float: left;
  width:  110px;
  height: 110px;
  object-fit: cover;
}
`

const StyledWrapper = styled.div`
background-color:#D8DEE3;
border-radius:15px;
width:90%;
margin:30px auto;
padding: 5px;
@media screen and (max-width:980px) {
display: flex;
flex-direction: column;
}
`
const StyledP = styled.p`
  font-size:20px;
  text-align:left;
  width: 100%;
  padding:10px;
@media screen and (max-width:1000px) {
  width: 100%;
}
`
const StyledWrapperTwo = styled.div`
display:flex;
justify-content: center;
@media screen and (max-width:500px) {
flex-wrap: wrap;
}
`
const StyledExampelTwo = styled.div`
display:flex;
width:45%;
justify-content: center;
flex-wrap: wrap;
img{
width:40%;
height: 40%;
margin: 20px;
border-radius: 7px;
}
@media screen and (max-width:1000px) {
    width: 100%;
    img {
      margin: 10px;
    }
}
`
const StyledExampelThree = styled.div`
width:45%;
height: 50%;
display: flex;
justify-content: center;
img{
  width:82%;
  margin-top: 20px;
  border-radius: 7px;
}
@media screen and (max-width:1000px) {
  width:100%;
img{
  width:80%;
  height: 100%;
  margin-top: 10px;
}
}
`

const MyPage = () => {
  const [fetchAPI, setFetchAPI] = useState([])
  let savedFav = JSON.parse(localStorage.getItem('favorites'));

  // testade att spara mer arrayen ett steg till, alltså newArr i en till array. Men det funkade inte riktigt. blev samma problem...
  // Testade också att göra en till for loop inuti loopen vi redan har. men det sket sig också ^^
  // gjorde också en helvändning och testade det sättet vi gjorde i Sams väder komponent. men det funkar inte riktigt för det vi vill ha ut med den infon
  // tror vi får testa state och hela det sättet. Håller tummarna för det!
  // MEN är ganska dålig på det och hade inte tålamod till det idag(främst för att jag inte vill sitta själv med det! :-)

  let test = []

  let newArr = [];
  for (let i = 0; i < savedFav.length; i++) {
    // URL = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=ec735448d26149ab9c7183714211504&format=json&num_of_days=1&q=${savedFav[i]}`

    let cityObj = {
      city: '',
      temp: 0,
      sunrise: '',
      sunset: '',
    }
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
        newArr.push({ cityObj })
        console.log(newArr)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div>
      <StyledDiv>
        <p>Dina valda favoriter: </p>
        <ul>
          {savedFav.map(obj => <li key={obj}>
            <CityCard >
              <h2>{obj}</h2>
            </CityCard>
          </li>)}
        </ul>
      </StyledDiv>

      <StyledWrapper>
        <StyledP>Utforska andra förslag för dig:</StyledP>
        <StyledWrapperTwo>
          <StyledExampelTwo>
            <img src={London} alt='bild på London' />
            <img src={NY} alt='bild på New York' />
            <img src={Barcelona} alt='bild på Barcelona' />
            <img src={Tokyo} alt='bild på Tokyo' />
          </StyledExampelTwo>
          <StyledExampelThree>
            <img src={Paris} alt='bild på Paris' />
          </StyledExampelThree>
        </StyledWrapperTwo>
      </StyledWrapper>
    </div>
  )
}
export default MyPage