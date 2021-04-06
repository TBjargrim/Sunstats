import React, {useState} from "react";
import styled from "styled-components";
import {Redirect} from "react-router-dom";
import Calendar from "./Calendar";
import Temp from "./Temp";
import Info from "./Info";

function Wiz() {
    const [targetTemp, setTargetTemp] = useState();
    const [saveDate, setSaveDate] = useState();
    const [targetInfoClick, setTargetInfoClick] = useState();
    const [targetTempClick, setTargetTempClick] = useState();
    const [targetTempClickBack, setTargetTempClickBack] = useState();
    
    return (
        <>
            {!targetInfoClick ?
                <Info
                setTargetInfoClick={setTargetInfoClick} />
                : null}
            
            {targetInfoClick && !targetTempClick ?
                <Temp
                    setTargetTempClick={setTargetTempClick}
                    setTargetTemp={setTargetTemp}
                    setTargetTempClickBack={setTargetTempClickBack}/> : null}
            
            {targetTemp && targetTempClick ?
                <Calendar setSaveDate={setSaveDate} /> : null}


            {targetTemp && saveDate ? <Redirect to={`/result/${targetTemp}/${saveDate}`} /> : null}
         </>
    )
}

export default Wiz;