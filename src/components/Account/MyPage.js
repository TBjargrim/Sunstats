// import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import London from '../../Images/LondonImage.jpg'
import Tokyo from '../../Images/TokyoImage.jpg'
import NY from '../../Images/NYimage.jpg'
import Barcelona from '../../Images/BarcelonaImage.jpg'
import Paris from '../../Images/ParisImage.jpg'
import WeatherData from './GetWeaterData'
import { FaHeart } from 'react-icons/fa';

const StyledDiv = styled.div`
display:flex;
margin-top:30px;

p {
  font-size: 18px;
  text-align: left;
  font-weight:700;
  letter-spacing:1px;
}
`
const Heart = styled(FaHeart)`
color: red;
font-size: 18px;
margin: 5px;
margin-top:20px;
margin-left:30px;
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
        <Heart /><p> Dina favoriter:   </p>
      </StyledDiv>

      <WeatherData />
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