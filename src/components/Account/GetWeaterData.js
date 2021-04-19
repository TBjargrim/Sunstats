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
// const CityCard = styled.div`
// margin: 0;
// padding: 5px;
// background-color:#D8DEE3;
// border-radius:15px;
// width: 220px;
// /* border: 1px solid orange; */
// display: flex;
// flex-wrap: wrap;
// h2{
// font-size: 20px;
// /* border: 1px solid green; */
// width: 100%;
// }
// h4{
//     font-size: 20px;
//     /* border: 1px solid blue; */
//     margin: 0;
// }
// h4 span {
//     /* border: 1px solid yellow; */
// }
// `;

// const Temp = styled.div`
// width: 100%;
// border-radius: 10px;
// padding: 5px;
// /* border: 1px solid black; */
// display: flex;
// background-color: white;
// img{
// border-radius:50%;
// width:50px;
// /* border: 1px solid purple;   */
// }
// h4{
// font-size: 22px;
// margin-right: 15px;
// }
// span{
//     font-size: 20px;

// }
// `

// const SunriseSunset = styled.div`
// width: 100%;
// margin: 0;
// text-align: center;
// /* border: 1px solid red; */
// h4:first-child{
// color: yellow;
// }
// `


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
