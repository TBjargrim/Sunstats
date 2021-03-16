import React from "react";
import styled from "styled-components";
import BackgroundLanding from '../../Images/BackgroundLanding.jpg';

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
const SignInBtn = styled.button`
width:350px;
height:60px;
background: linear-gradient(180deg, #F79521 0%, rgba(248, 98, 14, 0) 100%), #F36565;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 25px;
  color: white;
  font-size: 30px;
  text-transform: uppercase;
  padding: 12px 60px;
  margin: 20px 0px;
  cursor: pointer;
  border:none;
  transition: ease background-color 250ms; 
  &:focus{
    outline:none;
  }
  &:hover {
    background-color: #F8AF59;
  border:1px solid #EC8F21;
  opacity:0.9;
  }
  @media screen and (max-width:1000px) {
    width:250px;
    height:50px;
    font-size: 20px;
}
  `
const CreAccBtn = styled.button`
  width:250px;
  height:45px;
  background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 25px;
  color: black;
  font-size: 15px;
  text-transform: uppercase;
  padding: 10px 40px;
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
    height:30px;
    font-size: 10px;
}
  `
const Title = styled.h1`

`

const Landing = () => (

  <Wrapper style={{ backgroundImage: `url(${BackgroundLanding})` }}>
    <ContainerDiv>
      <SignInBtn>Logga in</SignInBtn>
      <CreAccBtn> Skapa konto</CreAccBtn>
    </ContainerDiv>
  </Wrapper>

);

export default Landing;
