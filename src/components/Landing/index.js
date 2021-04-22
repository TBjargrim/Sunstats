import React from "react";
import styled from "styled-components";
import BackgroundLanding from '../../Images/beach.jpg';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom'
import Logo from '../../Images/sunstats_logo.png'
import RenderTheme from '../ChangeBranding/RenderTheme';

import { ThemeProvider } from 'styled-components';
import { VingTheme, ApolloTheme } from '../ChangeBranding/ThemeStyled'
import { useVingMode } from '../ChangeBranding/LocalStorage'
const Wrapper = styled.div`
background-size:cover;
position:absolute;
top:0;
left:0;
width:100%;
height:100vh;
overflow-y:hidden;
overflow-x:hidden;
outline: 1px dashed #fff;
outline-offset: -10px;
`
const ContainerDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:150px;
  p {
    font-size: 33px;
  }
  div {
    height: 10em;
    position: relative;
    margin-right: 0px;
    width: 240px;
  }
  div > * {
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    animation: 20s autoplay1 infinite;
  }
  @keyframes autoplay1 {
    0% {
      visibility: visible;
      opacity: 0%;
    }
    6% {
      visibility: visible;
      opacity: 25%;
    }
    20% {
      visibility: visible;
      opacity: 100%;
    }
    33.33% {
      visibility: hidden;
      opacity: 0%;
    }
  }
  
  div > *:nth-child(1) {animation-delay: 0s}
  div > *:nth-child(2) {animation-delay: 6s}
  div > *:nth-child(3) {animation-delay: 12s}
`
const SignInBtn = styled(Link)`
  width:330px;
  height:45px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 20px 0px;
  cursor: pointer;
  border:none;
  transition: ease background-color 250ms; 
  font-size: 25px;
  text-align: center;
  text-decoration: none;
  padding-top: 15px;
  background: ${({ theme }) => theme.button.background};
  &:focus{
    outline:none;
  }
  &:hover {
  background-color: ${({ theme }) => theme.button.hover.backgroundColor};
  opacity:0.9;
  }
  @media screen and (max-width:1000px) {
    width:250px;
    height:30px;
    font-size: 15px;
  }`

const CreAccBtn = styled(Link)`
  width:250px;
  height:35px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  color: black;
  font-size: 15px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  padding-top: 18px;
  border:none;
  margin: 10px 0px;
  cursor: pointer;
  transition: ease background-color 250ms; 
  &:focus{
    outline:none;
  }
  &:hover {
    background: #e7e7e7;
    opacity:0.9;
  }
  @media screen and (max-width:1000px) {
    width:200px;
    height:25px;
    font-size: 10px;
    padding-top: 15px;
    margin: 0px;
}
  `
const Logga = styled.img`
position:absolute;
left:50px;
top:50px;
width:250px;
   animation-name: moveInleft;
    animation-duration: 4s;
@keyframes moveInleft {
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }
    80% {
        transform: translateX(10px);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
}
@media screen and (max-width:1000px) {
  top:30px;
  left:25px;
width:150px;
}
 `
const InfoText = styled.div`

p {
  font-weight: 700;
  font-size: 35px;
  color: white;
}
`

const Landing = () => {
  const [theme] = useVingMode();
  const themeMode = theme === 'ving' ? VingTheme : ApolloTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <Wrapper style={{ backgroundImage: `url(${BackgroundLanding})` }}>
        <Logga src={Logo}></Logga>
        <ContainerDiv>
          <InfoText>
            <p>Längtar du efter sol och värme?</p>
            <p>Logga in och sök efter din bästa resa</p>
            <p>Sök på temperaturer och datum</p>
          </InfoText>

          <SignInBtn to={ROUTES.SIGN_IN}>Logga in</SignInBtn>
          <CreAccBtn to={ROUTES.SIGN_UP}> Skapa konto</CreAccBtn>



        </ContainerDiv>
        <section>
          <RenderTheme />
        </section>
      </Wrapper>
    </ThemeProvider>
  )
};

export default Landing;