// import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import London from '../../Images/LondonImage.jpg'
import Tokyo from '../../Images/TokyoImage.jpg'
import NY from '../../Images/NYimage.jpg'
import Barcelona from '../../Images/BarcelonaImage.jpg'
import Paris from '../../Images/ParisImage.jpg'
import WeatherData from './GetWeaterData';

const StyledDiv = styled.div`
padding: 0;
p {
  font-size: 20px;
  text-align: left;
  margin:70px 150px;
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
// const CityCard = styled.div`
// margin: 0;
// padding: 5px;
// h2{
// font-size: 18px;
// }
// `;
// const StyledImg = styled.div`
// margin: 5px;
// img{
//   border-radius: 15px;
//   float: left;
//   width:  110px;
//   height: 110px;
//   object-fit: cover;
// }
// `

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

  return (
    <div>
      <StyledDiv>
        <p>Dina valda favoriter: </p>
        <WeatherData />
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