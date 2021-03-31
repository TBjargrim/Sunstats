import React, {useState} from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import Calendar from "./Calendar";
import Temp from "./Temp";
import Info from "./Info";

function Wiz() {
    const [targetTemp, setTargetTemp] = useState();
    const [saveDate, setSaveDate] = useState();

    return (
        <>
        <Info />
        <Temp setTargetTemp={setTargetTemp} />
        <Calendar setSaveDate={setSaveDate} />
        {targetTemp && saveDate ? <Redirect to={`/result/${targetTemp}/${saveDate}`} /> : null}
        </>
    )
}

export default Wiz;