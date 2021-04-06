import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { subDays, addDays } from "date-fns";
//bpCSS Modules, react - datepicker - cssmodules.css;
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styled from "styled-components";
import "./datepicker.css";
// import { Redirect } from "react-router";
const CalendarDiv = styled.div`
padding-top: 200px;
div {
  text-align: center;
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
  margin: 15px 0 10px 0;
/*   box-shadow: 1px 2px 10px gray; */
`;
const BtnDiv = styled.div`
display: flex;
justify-content: center;
margin-top: 30px;
`;

const Calendar = ({setSaveDate}) => {
  const [startDate, setStartDate] = useState(new Date());

  function handleChange() {
    let parent = document.getElementsByClassName("react-datepicker__input-container")
    let obj = Object.keys(parent)[0];
    let value = parent[obj];
    let tagInp = value.getElementsByTagName("input")[0];
    let res = tagInp.value;
    setSaveDate(res);
  }
 
  return (
    <CalendarDiv>
      <div>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="MMMM"
        showMonthYearPicker
      />
      </div>
      <BtnDiv>
        <TravelBtn type="submit" onClick={handleChange}>OK</TravelBtn>
      </BtnDiv>
    </CalendarDiv>
  );
};

export default Calendar;