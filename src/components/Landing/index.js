import React from "react";
import styled from "styled-components";
import BackgroundLanding from '../../Images/BackgroundLanding.jpg';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom'
import Logo from '../../Images/sunstats_logo.png'


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
  background: linear-gradient(180deg, #F79521 0%, rgba(248, 98, 14, 0) 100%), #F36565;
  &:focus{
    outline:none;
  }
  &:hover {
  background-color: #F8AF59;
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
    animation-duration: 3s;

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
// animation:         NAME-YOUR-ANIMATION 5s infinite;
const Landing = () => (

  <Wrapper style={{ backgroundImage: `url(${BackgroundLanding})` }}>
    <Logga src={Logo}></Logga>
    <ContainerDiv>

      {/* <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li> */}
      <SignInBtn to={ROUTES.SIGN_IN}>Logga in</SignInBtn>
      <CreAccBtn to={ROUTES.SIGN_UP}> Skapa konto</CreAccBtn>
    </ContainerDiv>
  </Wrapper>

);

export default Landing;
