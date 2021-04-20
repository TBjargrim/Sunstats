import React, { useState } from 'react'
import styled from 'styled-components'
import SingletonWeather from './SingletonWeather';

const StyledDiv = styled.div`
padding: 0;
p {
  font-size: 20px;
  text-align: left;
  margin-left:30px;
}
ul {
  display:flex;
  flex-direction:column;
  list-style: none;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}

li {
  text-align: center;
  margin: 5px;
  /* border: 1px solid green; */

}

`


const GetWeatherData = () => {
  // const [fetchAPI, setFetchAPI] = useState([])
  const [savedFav, setSavedFav] = useState(JSON.parse(localStorage.getItem('favorites')) || [])
  //let savedFav = JSON.parse(localStorage.getItem('favorites'));

  return (
    <>
      <StyledDiv>
        <ul>
          {savedFav.map(fav => (<SingletonWeather key={fav} city={fav} />))}
        </ul>
      </StyledDiv>
    </>)

}
export default GetWeatherData
