import styled from "styled-components";
import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom"


const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 20px 20px 20px 12px;
  h1 {
    font-weight: 500;
    text-align: center;
  }
  ul {
    padding: 0;

  }
  li {
      text-decoration: none;
      list-style-type: none;
  }
  
`;
const CityCard = styled.div`
display: flex;
flex-direction: row;
box-shadow: 1px 2px 10px gray;
margin: 15px;
background-color: #E8E8E8;
div{
  display: flex;
}
`;
const CityCardInfo = styled.div`
flex-direction: column;
width: 100%;
padding: 35px;

h2 {
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin: 0px;
}
p {
  font-size: 15px;
  text-align: center;
  margin: 0;
  padding-top: 10px;
}
`;
const CityCardImg = styled.div`
width: 90%;
img{
  width: 100%;
}
`;

let dataArr = [
  {
    city: "Tokyo",
    avarageTemp: 10,
  },
  {
    city: "Aruba",
    avarageTemp: 30,
  },
  {
    city: "Paris",
    avarageTemp: 5,
  },
  {
    city: "Stockholm",
    avarageTemp: 4,
  },
  {
    city: "Barcelona",
    avarageTemp: 20,
  }
];

function Result() {
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

  return (
    <FlexDiv>
      <h1>{date}</h1>
      <div>
        <ul>
          {newArr.map(obj => <li key={obj.city}>
            <CityCard onClick={createHandleClickForDestination(obj.city)}>
              <CityCardImg>
                <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" alt="city" />
              </CityCardImg>
              <CityCardInfo>
                <h2>{obj.city}</h2>
                <p>Medeltemperatur: {obj.avarageTemp}</p>
              </CityCardInfo>
            </CityCard>
          </li>)}
        </ul>
      </div>
    </FlexDiv>
  );
}


export default Result;