
import styled from "styled-components";
import { useState } from "react";
import React, { Component } from "react";
import Calendar from "./Calendar"
import Temp from "./Temp"



const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 20px 20px 20px 12px;
 div {
   text-align: center;
 }
  h2 {
    font-size: 20px;
    font-weight: 400;
   margin-bottom: 25px;
  }
  p {
    font-size: 15px;
  }
`;

const TravelBtn = styled.button`
  display: block;
  background: linear-gradient(
    180deg
    ,#F79521 0%,rgba(248,98,14,0) 100%),#F36565;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 5px 40px 5px 40px;
  font-size: 20px;
  margin: 15px 0 10px;
/*   box-shadow: 1px 2px 10px gray; */
`;
const BtnDiv = styled.div`
display: flex;
justify-content: center;
`;


function HomeStyled() {
  return (
    <FlexDiv>
      <div>
        <h2>Vilken medeltemperatur vill du ha?</h2>
       <Temp />
      </div>
      <div>
        <h2>När vill du åka?</h2>
          <Calendar />
          <p><i>Startdatum för två veckors intervall</i></p>
      </div>
      <BtnDiv>
        <TravelBtn type="submit">OK</TravelBtn>
      </BtnDiv>
    </FlexDiv>
  );
} 

export default HomeStyled;
