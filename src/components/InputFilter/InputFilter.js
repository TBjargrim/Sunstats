import styled from "styled-components";
import React from "react";
import { useHistory } from "react-router-dom"
import { ThemeProvider } from 'styled-components';
import { VingTheme, ApolloTheme } from '../ChangeBranding/ThemeStyled'
import { useVingMode } from '../ChangeBranding/LocalStorage'

const FlexDiv = styled.div`
display: flex;
justify-content: center;
`;

const BarWrapper = styled.div`
background-color: ${({ theme }) => theme.background};
border-radius: 40px;
padding: 10px;
text-align: center;

select {
  color:${({ theme }) => theme.text};
  margin: 5px;
  padding: 5px;
  border-radius: 20px;
  font-size: 15px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
}
button {
  color:${({ theme }) => theme.text};
  margin: 15px;
  padding: 10px 20px 10px 20px;
  border-radius: 20px;
  outline: none;
  border: none;
  font-size: 14px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
  /* background: ${({ theme }) => theme.background}; */
 /* background: linear-gradient(
    180deg
    ,#F79521 0%,rgba(248,98,14,0) 100%),#F36565;  */
}
`;

function InputFilter() {
  let history = useHistory();
  const [theme, toggleTheme] = useVingMode();
  const themeMode = theme === 'ving' ? VingTheme : ApolloTheme;

  function handleClick(e) {
    e.preventDefault();
    let selectionMonth = document.querySelector(".month");
    let monthValue = selectionMonth.value;
    let selectionTemp = document.querySelector(".temp");
    let tempValue = selectionTemp.value;

    history.push(`/result/${tempValue}/${monthValue}`);
  }
  return (
    <ThemeProvider theme={themeMode}>
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
    </ThemeProvider>
  );
}





export default InputFilter;