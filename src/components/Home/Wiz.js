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
    const [targetJumpOver, setTargetJumpOver] = useState();
    
    return (
        <>
            {!targetTemp && !saveDate && !targetInfoClick  ?
            //OM info click inte är klickad, visa info
                <Info
                setTargetInfoClick={setTargetInfoClick} />
                : null}
            
            {!targetTemp && !saveDate && targetInfoClick 
            /* targetInfoClick && !targetTempClick && !targetJumpOver */ ?
            //Om infoclick är klickad och
            //tempclick inte är klickad
                <Temp
                    setTargetInfoClick={setTargetInfoClick}
                    setTargetTemp={setTargetTemp}
                    setTargetJumpOver={setTargetJumpOver}
                    /> : null}
            
            {targetTemp  && !saveDate && targetInfoClick  /* targetTemp && targetTempClick ||
            targetTemp && targetJumpOver */  ?
                // om targettemp och targettempclick är true (klickade)
                //
                <Calendar setSaveDate={setSaveDate} /> : null}


            {targetTemp && saveDate ? <Redirect to={`/result/${targetTemp}/${saveDate}`} /> : null}
         </>
    )
}

export default Wiz;