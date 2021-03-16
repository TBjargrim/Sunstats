import styled from "styled-components";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
import * as ROUTES from '../../constants/routes';
/* 
https://hypeserver.github.io/react-date-range/#daterange
*/
const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 20px 20px 12px;
  h2 {
    font-size: 16px;
    font-weight: 500;
   margin-bottom: 15px;
  }
  a {
    text-decoration: none;
  }
`;
const TravelSlc = styled.select`
  font-size: 18px;
  border-radius: 30px;
  margin: 0 0 30px 0;
  padding: 5px 60px 5px 60px;
  font-size: 13px;
  background: white;
  border: none;
  outline: none;
  box-shadow: 1px 2px 10px gray;
   background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    no-repeat right #fff;
  -webkit-appearance: none;
  background-position-x: 120px; 
`;
const TravelBtn = styled.button`
  display: block;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 5px 40px 5px 40px;
  font-size: 17px;
  margin: 15px 0 10px 210px;
  box-shadow: 1px 2px 10px gray;
`;
const DateRangeDiv = styled.div`

`;

function HomeStyled() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
      color: "#ff85a2",
    },
  ]);

  return (
    <FlexDiv>
      <div>
        <h2>Vilken medeltemperatur vill du ha?</h2>
        <TravelSlc>
          <option value="volvo">10 C</option>
          <option value="saab">15 C</option>
          <option value="opel">20 C</option>
          <option value="audi">25 C</option>
        </TravelSlc>
      </div>
      <div>
        <h2>När vill du åka?</h2>
        <DateRangeDiv>
          <DateRange
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={state}
            onChange={(item) => setState([item.selection])}
          /* scroll={
            {
              enabled: true,
              calendarHeight: 200,
              calendarWidth: 200,
              monthHeight: 200,
              monthWidth: 200,
            }
          } */
          />
        </DateRangeDiv>
      </div>
      <div>
        <Link to={ROUTES.SEARCHED}>
        <TravelBtn type="submit">OK</TravelBtn>
        </Link>
      </div>
    </FlexDiv>
  );
}
export default HomeStyled;
