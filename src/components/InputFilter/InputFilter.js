import styled from "styled-components";
import React, { useState } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom"

const FlexDiv = styled.div`
display: flex;
justify-content: center;
`;

const BarWrapper = styled.div`
background-color: #FFEEB0;
border-radius: 40px;
padding: 10px;
text-align: center;

select {
  margin: 5px;
  padding: 5px;
  border-radius: 20px;
  font-size: 15px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
}
button {
  margin: 15px;
  padding: 10px 20px 10px 20px;
  border-radius: 20px;
  outline: none;
  border: none;
  font-size: 14px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
  background: linear-gradient(
    180deg
    ,#F79521 0%,rgba(248,98,14,0) 100%),#F36565;
}
`;

function InputFilter() {
  let history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    let selectionMonth = document.querySelector(".month");
    let monthValue = selectionMonth.value;
    let selectionTemp = document.querySelector(".temp");
    let tempValue = selectionTemp.value;

    history.push(`/result/${tempValue}/${monthValue}`);
  }
  return (
    <FlexDiv>
      <BarWrapper>
        <select className="month">
          <option>Månad</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>

        <select className="temp">
          <option>Medeltemp</option>
          <option value="10">10ºC</option>
          <option value="15">15ºC</option>
          <option value="20">20ºC</option>
          <option value="25">25ºC</option>
          <option value="30">30ºC</option>
          <option value="35">35ºC</option>
        </select>
        <button onClick={handleClick}>Sök</button>
      </BarWrapper>
    </FlexDiv>
  );
}





export default InputFilter;