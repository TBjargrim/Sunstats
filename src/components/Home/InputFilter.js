import styled from "styled-components";
import React, { useState } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom"

function InputFilter() {
    const { temp, date } = useParams();
    const [redirectionPath, setRedirectionPath] = useState();
    let history = useHistory();
  
    let newArr = (dataArr.filter((obj) =>
      obj.avarageTemp >= parseInt(temp) - 5 &&
      obj.avarageTemp <= parseInt(temp) + 5));
  
    function createHandleClickForDestination(destination) {
      return function () {
        let clickedCity = destination;
        setRedirectionPath(clickedCity);
        console.log(clickedCity)
        history.push(`/result/${temp}/${date}/${destination}`);
      }
    }