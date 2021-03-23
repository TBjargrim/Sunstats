
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





function HomeStyled() {
  return (
    <FlexDiv>
      <div>
         {/*
        <h2>Vilken medeltemperatur vill du ha?</h2>
       <Temp /> */}
      </div>
      <div>
        <h2>När vill du åka?</h2>
          <Calendar />
          <p><i>Startdatum för två veckors intervall</i></p>
      </div>
      
    </FlexDiv>
  );
} 

export default HomeStyled;
