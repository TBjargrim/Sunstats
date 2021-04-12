import React, { useState, useEffect } from 'react'
import styled from "styled-components";

const CityCardImg = styled.div`
width: 100%;
img{
  width: 100%;
  height: 100%;
}
`;

const CityCard = styled.div`
display: flex;
flex-direction: row;
box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
margin: 15px;
background-color: #F0F0F0;
div{
  display: flex;
}
`;

const CityCardInfo = styled.div`
display: flex;
flex-direction: row;
box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
margin: 15px;
background-color: #F0F0F0;
div{
  display: flex;
}
`;

const MyPage = () => {
  const [myFav, setMyFav] = useState([])



  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('items'));
  //   if (items) {
  //     setItems(items);
  //   }
  // });

  let savedFav = [];
  // const myFav = []
  // console.log(localStorage.getItem('favorites'))
  useEffect(() => {
    console.log('useeffect körs')
    savedFav = JSON.parse(localStorage.getItem('favorites'));
    if (savedFav) {
      setMyFav(savedFav);
    }

  }, [])

  const myFavArr = []
  console.log(savedFav)
  return (
    <div>
      <p>Dina valda favoriter: </p>
      <ul>
        {savedFav.map(obj => <li key={obj.city}>
          <CityCard >
            <CityCardInfo>
              <h2>{obj.city}</h2>
              <p>Medeltemperatur: {obj.temperatur}</p>
            </CityCardInfo>
          </CityCard>
        </li>)}
      </ul>
    </div>
  )
}

export default MyPage

{/* <ul>
{newArr.map(obj => <li key={obj.city}>

  <CityCard >
    <CityCardImg onClick={createHandleClickForDestination(obj.city)}>
      <img src={obj.image} alt='bild på strand' />
    </CityCardImg>
    <CityCardInfo>
      <h2>{obj.city}</h2>
      <p>Medeltemperatur: {obj.temperatur}</p>
      {favorites ?
        (<FiHeart onClick={() => AddFavourite(obj)} style={{ color: 'red' }} />)
        :
        (<FaHeart onClick={() => deleteFavorite(obj)} style={{ color: 'red' }} />)}

    </CityCardInfo> */}