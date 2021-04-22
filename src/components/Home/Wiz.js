import React, { useState } from "react";
import { Redirect } from "react-router-dom";
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
            {!targetTemp && !saveDate && !targetInfoClick ?
                <Info
                    setTargetInfoClick={setTargetInfoClick} />
                : null}
            {!targetTemp && !saveDate && targetInfoClick ?
                <Temp
                    setTargetInfoClick={setTargetInfoClick}
                    setTargetTemp={setTargetTemp}
                    setTargetJumpOver={setTargetJumpOver}
                /> : null}
            {targetTemp && !saveDate && targetInfoClick ?
                <Calendar setSaveDate={setSaveDate} /> : null}
            {targetTemp && saveDate ? <Redirect to={`/result/${targetTemp}/${saveDate}`} /> : null}
        </>
    )
}

export default Wiz;