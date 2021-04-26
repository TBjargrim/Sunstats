import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "./datepicker.css";
import { StyledH2Temp, StyledP, CalendarDiv, TravelBtn, BtnDiv } from './SelectionStyling';

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

  return (
    <CalendarDiv>
      <>
        <StyledH2Temp>När vill du åka ? </StyledH2Temp>
        <StyledP>Välj en månad som passar dig</StyledP>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          dateFormat="MMMM"
          showMonthYearPicker
          inline
        />
      </>
      <BtnDiv>
        <TravelBtn type="submit" onClick={handleChange}>OK</TravelBtn>
      </BtnDiv>
    </CalendarDiv>
  );
};

export default Calendar;