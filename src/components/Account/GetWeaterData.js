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
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}
li {
  text-align: center;
  margin: 5px;
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
