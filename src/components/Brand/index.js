
import React from 'react';
import styled from 'styled-components';
import alogo  from '../../Images/alogo.png'
import charts  from '../../Images/charts.png'

const Title = styled.h2`
  font-size: 25px;
  text-align: left;
  color: palevioletred;
  flex-direction: column;
  text-align: center;
  padding:4px;

`;


const Wrapper = styled.section`
font-size: 18px;
border-radius: 50px;
margin:  20px;
padding: 50px;
text-align: center;
border-radius: 30px;
padding: 50px 60px 5px 60px;
font-size: 13px;
background: white;
border: none;
outline: none;
box-shadow: 1px 2px 10px gray;

`;

function Brand(){
  return (<Wrapper>
        <img src={alogo} width="200" height="50" alt="alogo" style={{margin: '0 auto'}}/>
    <Title><h1> Mallorca</h1>
    <h1>Spain</h1></Title>
    <h2>Temperaturer</h2>
    <img src={charts} width="250" height="300" alt="charts" style={{margin: '2 center'}}/>
    <h2>Luftfuktighet</h2>
    <img src={charts} width="250" height="300" alt="charts" style={{margin: '2 center'}}/>

   
  </Wrapper>

  
  );

}










export default Brand;



