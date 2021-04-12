import styled from "styled-components";
import React, { useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom"
import { collectedAvgTempAndCities } from '../CollectedData/SelectedAvgTempCity'
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

import AlanyaImg from '../../Images/AlanyaImage.jpg'
import ArubaImg from '../../Images/ArubaImage.jpg'
import BarcelonaImg from '../../Images/BarcelonaImage.jpg'
import HonoluluImg from '../../Images/Honolulu.jpg'
import IbizaImg from '../../Images/IbizaImage.jpg'
import KingstonImg from '../../Images/KingstonImage.jpg'
import KretaImg from '../../Images/KretaImage.jpg'
import ParisImg from '../../Images/ParisImage.jpg'
import PhuketImg from '../../Images/PhuketImage.jpg'
import RhodosImg from '../../Images/RhodosImage.jpg'
import RomeImg from '../../Images/RomeImage.jpg'
import SingaporeImg from '../../Images/SingaporeImage.jpg'
import TokyoImg from '../../Images/TokyoImage.jpg'
import UbudImg from '../../Images/UbudImage.jpg'

import { AuthUserContext } from '../Session'

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 20px 20px 20px 12px;
  h1 {
    font-weight: 800;
    text-align: center;
    color: #40A6BC;
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
box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
margin: 15px;
background-color: #F0F0F0;
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

const FavHeart = styled.div`
margin: 15px;
font-size: 22px;
`

const CityCardImg = styled.div`
width: 100%;
img{
  width: 100%;
}
`;

function Result({ setSaveDate }) {
  const { temp, date } = useParams();
  const [redirectionPath, setRedirectionPath] = useState();
  let history = useHistory();
  const [favorites, setFavorites] = useState(false);
  
  const authUser = useContext(AuthUserContext)
  console.log(Object.keys(authUser.favCities)) // OBS!

  let citiesArr = []
  const ImagesCities = [AlanyaImg, ArubaImg, BarcelonaImg, HonoluluImg, IbizaImg, KingstonImg, KretaImg, ParisImg, PhuketImg, RhodosImg, RomeImg, SingaporeImg, TokyoImg, UbudImg]
  let JanArr = []
  let FebArr = []
  let MarArr = []
  let AprArr = []
  let MayArr = []
  let JunArr = []
  let JulArr = []
  let AugArr = []
  let SepArr = []
  let OctArr = []
  let NovArr = []
  let DecArr = []
  for (let i = 0; i < collectedAvgTempAndCities.length; i++) {
    citiesArr.push(collectedAvgTempAndCities[i].city)
    JanArr.push(collectedAvgTempAndCities[i].averageTemp[0])
    FebArr.push(collectedAvgTempAndCities[i].averageTemp[1])
    MarArr.push(collectedAvgTempAndCities[i].averageTemp[2])
    AprArr.push(collectedAvgTempAndCities[i].averageTemp[3])
    MayArr.push(collectedAvgTempAndCities[i].averageTemp[4])
    JunArr.push(collectedAvgTempAndCities[i].averageTemp[5])
    JulArr.push(collectedAvgTempAndCities[i].averageTemp[6])
    AugArr.push(collectedAvgTempAndCities[i].averageTemp[7])
    SepArr.push(collectedAvgTempAndCities[i].averageTemp[8])
    OctArr.push(collectedAvgTempAndCities[i].averageTemp[9])
    NovArr.push(collectedAvgTempAndCities[i].averageTemp[10])
    DecArr.push(collectedAvgTempAndCities[i].averageTemp[11])
  }

  let newArr = []
  if (date === 'January') {
    citiesArr.forEach((city, index) => {
      const JanTemp = JanArr[index];
      const JanImage = ImagesCities[index];
      const JanObj = {
        city: city,
        temperatur: JanTemp,
        image: JanImage,
        fav: false
      }
      if (parseInt(JanObj.temperatur) >= parseInt(temp) - 5 && parseInt(JanObj.temperatur) <= parseInt(temp) + 5) {
        newArr.push(JanObj)
      }
    });
  } else if (date === "February") {
    citiesArr.forEach((city, index) => {
      const FebTemp = FebArr[index];
      const FebImage = ImagesCities[index]
      const FebObj = {
        city: city,
        temperatur: FebTemp,
        image: FebImage
      }
      if (parseInt(FebObj.temperatur) >= parseInt(temp) - 5 && parseInt(FebObj.temperatur) <= parseInt(temp) + 5) {
        newArr.push(FebObj)
      }
    })
  } else if (date === "March") {
    citiesArr.forEach((city, index) => {
      const MarTemp = MarArr[index];
      const MarImage = ImagesCities[index]
      const MarObj = {
        city: city,
        temperatur: MarTemp,
        image: MarImage
      }
      if (parseInt(MarObj.temperatur) >= parseInt(temp) - 5 && parseInt(MarObj.temperatur) <= parseInt(temp) + 5) {
        newArr.push(MarObj)
      }
    })
  } else if (date === "April") {
    citiesArr.forEach((city, index) => {
      const AprTemp = AprArr[index];
      const AprImage = ImagesCities[index]
      const AprObj = {
        city: city,
        temperatur: AprTemp,
        image: AprImage
      }
      if (parseInt(AprObj.temperatur) >= parseInt(temp) - 5 && parseInt(AprObj.temperatur) <= parseInt(temp) + 5) {
        newArr.push(AprObj)
      }
    })
  } else if (date === "May") {
    citiesArr.forEach((city, index) => {
      const MayTemp = MayArr[index];
      const MayImage = ImagesCities[index]
      const MayObj = {
        city: city,
        temperatur: MayTemp,
        image: MayImage
      }
      if (parseInt(MayObj.temperatur) >= parseInt(temp) - 5 && parseInt(MayObj.temperatur) <= parseInt(temp) + 5) {
        newArr.push(MayObj)
        console.log(MayObj)
      }
    })
  } else if (date === "June") {
    citiesArr.forEach((city, index) => {
      const JunTemp = JunArr[index];
      const JunImage = ImagesCities[index]
      const JunObj = {
        city: city,
        temperatur: JunTemp,
        image: JunImage
      }
      if (parseInt(JunObj.temperatur) >= parseInt(temp) - 5 && parseInt(JunObj.temperatur) <= parseInt(temp) + 5) {
        newArr.push(JunObj)
        console.log(JunObj)
      }
    })
  } else if (date === "July") {
    citiesArr.forEach((city, index) => {
      const JulTemp = JulArr[index];
      const JulImage = ImagesCities[index];
      const JulObj = {
        city: city,
        temperatur: JulTemp,
        image: JulImage
      }
      if (parseInt(JulObj.temperatur) >= parseInt(temp) - 5 && parseInt(JulObj.temperatur) <= parseInt(temp) + 5) {
        newArr.push(JulObj)
        console.log(JulObj)
      }
    })
  } else if (date === "Augusti") {
    citiesArr.forEach((city, index) => {
      const AugTemp = AugArr[index];
      const AugImage = ImagesCities[index];
      const AugObj = {
        city: city,
        temperatur: AugTemp,
        image: AugImage
      }
      if (parseInt(AugObj.temperatur) >= parseInt(temp) - 5 && parseInt(AugObj.temperatur) <= parseInt(temp) + 5) {
        newArr.push(AugObj)
      }
    })
  } else if (date === "September") {
    citiesArr.forEach((city, index) => {
      const SepTemp = SepArr[index];
      const SepImage = ImagesCities[index];
      const SepObj = {
        city: city,
        temperatur: SepTemp,
        image: SepImage
      }
      if (parseInt(SepObj.temperatur) >= parseInt(temp) - 5 && parseInt(SepObj.temperatur) <= parseInt(temp) + 5) {
        newArr.push(SepObj)
      }
    })
  } else if (date === "October") {
    citiesArr.forEach((city, index) => {
      const OctTemp = OctArr[index];
      const OctImage = ImagesCities[index];
      const OctObj = {
        city: city,
        temperatur: OctTemp,
        image: OctImage
      }
      if (parseInt(OctObj.temperatur) >= parseInt(temp) - 5 && parseInt(OctObj.temperatur) <= parseInt(temp) + 5) {
        newArr.push(OctObj)
      }
    })
  } else if (date === "November") {
    citiesArr.forEach((city, index) => {
      const NovTemp = NovArr[index];
      const NovImage = ImagesCities[index];
      const NovObj = {
        city: city,
        temperatur: NovTemp,
        image: NovImage
      }
      if (parseInt(NovObj.temperatur) >= parseInt(temp) - 5 && parseInt(NovObj.temperatur) <= parseInt(temp) + 5) {
        newArr.push(NovObj)
      }
    })
  } else if (date === "December") {
    citiesArr.forEach((city, index) => {
      const DecTemp = DecArr[index];
      const DecImage = ImagesCities[index];
      const DecObj = {
        city: city,
        temperatur: DecTemp,
        image: DecImage
      }
      if (parseInt(DecObj.temperatur) >= parseInt(temp) - 5 && parseInt(DecObj.temperatur) <= parseInt(temp) + 5) {
        newArr.push(DecObj)
      }
    })
  };


  function createHandleClickForDestination(destination) {
    return function () {
      let clickedCity = destination;
      setRedirectionPath(clickedCity);
      history.push(`/result/${temp}/${date}/${destination}`);
    }
  }
  // const getArray = JSON.parse(localStorage.getItem('favorites' || '0'))

  // useEffect(() => {
  //   if (getArray !== 0) {
  //     setFavorites([...getArray])
  //   }
  // }, [])

  // const addFav = (props) => {
  //   let array = favorites;
  //   let addArray = true;
  //   array.map((item, num) => {
  //     if (item === props.fav) {
  //       array.splice(key, 1);
  //       addArray = false;
  //     }
  //   });
  //   if (addArray) {
  //     array.push(props.fav);
  //   }
  //   setFavorites([...array])
  //   localStorage.setItem("favorites", JSON.stringify(favorites));

  //   let storage = localStorage.getItem('favItem' + (props.i) || '0')
  //   if (storage == null) {
  //     localStorage.setItem(('favItem' + (props.i)), JSON.stringify(props.item));
  //   }
  //   else {
  //     localStorage.removeItem('favItem' + (props.i));
  //   }
  // }
  // console.log(addFav())
  // const toggle = () => {
  //   let localLiked = favorites;
  //   localLiked = !localLiked;
  //   setFavorites(localLiked)
  // }
  function handleClick(props) {
    //toggle between obj.fav 
    //when true the obj should be pushed into an array
    // console.log(props.fav)
    setFavorites(prevValue => {
      return !prevValue
    })
  }

  return (
    <FlexDiv>
      <h1>{date}</h1>

      <div>
        <ul>
          {newArr.map(obj => <li key={obj.city}>

            <CityCard onClick={createHandleClickForDestination(obj.city)}>
              <CityCardImg>
                <img src={obj.image} alt='bild på strand' />
              </CityCardImg>
              <CityCardInfo>
                <h2>{obj.city}</h2>
                <p>Medeltemperatur: {obj.temperatur}</p>
              </CityCardInfo>
              <FavHeart>
                {favorites ? (
                  <FaHeart onClick={handleClick} style={{ color: 'red' }} />
                ) : <FiHeart onClick={handleClick} style={{ color: 'red' }} />}
              </FavHeart>
            </CityCard>

          </li>)}
        </ul>
      </div>
    </FlexDiv>
  );
}

export default Result;