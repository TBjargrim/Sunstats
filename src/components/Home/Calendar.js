import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subDays, addDays } from "date-fns";
//bpCSS Modules, react - datepicker - cssmodules.css;
 import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styled from "styled-components";
import "./datepicker.css";




const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
      />
    );
  };

export default Calendar;