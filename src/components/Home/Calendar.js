import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { subDays, addDays } from "date-fns";
//bpCSS Modules, react - datepicker - cssmodules.css;
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styled from "styled-components";
import "./datepicker.css";
// import * as ROUTES from '../../constants/routes';

// import { Redirect } from "react-router";
const CalendarDiv = styled.div`
padding-top: 200px; 
div {
  text-align: center;
}
`;
const TravelBtn = styled.button`
  display: block;
  /* background: linear-gradient(
    180deg
    ,#F79521 0%,rgba(248,98,14,0) 100%),#F36565; */
  color: white;
  border: none;
  border-radius: 30px;
  padding: 5px 40px 5px 40px;
  font-size: 20px;
  margin: 15px 0 10px 0;
/*   box-shadow: 1px 2px 10px gray; */
&:active{
  outline:none;
}
`;
const BtnDiv = styled.div`
display: flex;
justify-content: center;
margin-top: 30px;
`;

const Calendar = ({ setSaveDate }) => {
  const [startDate, setStartDate] = useState(new Date());

  function handleChange() {
   let parent = document.getElementsByClassName("react-datepicker__month react-datepicker__monthPicker")
    let obj = Object.keys(parent)[0];
    let value = parent[obj].getAttribute("aria-label");
    let month = value.substr(12, 2);
    
    if (month === "01") {
      setSaveDate("January");
    }
    if (month === "02") {
      setSaveDate("February");
    }
    if (month === "03") {
      setSaveDate("March");
    }
    if (month === "04") {
      setSaveDate("April");
    }
    if (month === "05") {
      setSaveDate("May");
    }
    if (month === "06") {
      setSaveDate("June");
    }
    if (month === "07") {
      setSaveDate("July");
    }
    if (month === "08") {
      setSaveDate("August");
    }
    if (month === "09") {
      setSaveDate("September");
    }
    if (month === "10") {
      setSaveDate("October");
    }
    if (month === "11") {
      setSaveDate("November");
    }
    if (month === "12") {
      setSaveDate("December");
    }
  }

  // const handleJump = () => {
  //   let clicked = true;
  //   let temp = 30;
  //   console.log(temp);
  //   setTargetTemp(temp);
  //   setTargetJumpOver(clicked);
  // }

  return (
    <CalendarDiv>
      <div>
      <p>Välj en månad...</p>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          dateFormat="MMMM" 
          showMonthYearPicker
          inline
        />
      </div>
      {/* <StyledLinkSkip to={ROUTES.WIZ} onClick={handleJump}>Hoppa över</StyledLinkSkip> */}
      <BtnDiv>
        <TravelBtn type="submit" onClick={handleChange}>OK</TravelBtn>
      </BtnDiv>
    </CalendarDiv>
  );
};

export default Calendar;