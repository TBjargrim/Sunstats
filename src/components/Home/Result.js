import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"
import { collectedAvgTempAndCities } from '../CollectedData/SelectedAvgTempCity'
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import InputFilter from "../InputFilter/InputFilter"
import { ThemeProvider } from 'styled-components';
import { VingTheme, ApolloTheme } from '../ChangeBranding/ThemeStyled'
import { useVingMode } from '../ChangeBranding/LocalStorage'

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

const Green = styled.p`
color: green;
padding: 20px;
font-weight: 600;
`;
const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 20px 20px 20px 12px;
  h1 {
    font-weight: 800;
    text-align: center;
    color: ${({ theme }) => theme.h1};
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
border-radius: 30px;
div{
  display: flex;
}

`;
const CityCardInfo = styled.div`
flex-direction: column;
width: 60%;
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
width: 20%;
img{
  width: 100%;
  border-radius: 30px 0 0 30px;
}
@media only screen and (max-width : 703px) {
  width: 400%;
img{
  width: 100%;
  border-radius: 30px 0 0 30px;
}
`;

function Result({ setSaveDate }) {
  const { temp, date } = useParams();
  const [redirectionPath, setRedirectionPath] = useState();
  const [theme, toggleTheme] = useVingMode();
  const themeMode = theme === 'ving' ? VingTheme : ApolloTheme;
  let history = useHistory();
  const [favorites, setFavorites] = useState([]);
  const [toggleHeart, setToggleHeart] = useState(false);
  const [cityTemp, setCityTemp] = useState();

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
        image: JanImage
      }
      if (parseInt(JanObj.temperatur) >= parseInt(temp) - 5 && parseInt(JanObj.temperatur) <= parseInt(temp) + 5) {
        newArr.push(JanObj)
          ;
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
  let newArrSorted = newArr.sort((a, b) => (a.temperatur > b.temperatur) ? -1 : 1)

  function createHandleClickForDestination(destination, temperature, image) {
    return function () {
      let clickedCity = destination;
      setRedirectionPath(clickedCity);
      setCityTemp(temperature)
      history.push
      ({
        pathname: `/result/${temp}/${date}/${destination}`,
        state:
        {
          temp: temperature, 
        }
      });
    }
  }
  const AddFavourite = (city) => {
    const newFavouriteList = [...favorites, city] //Copy of the useState, favorites
    // console.log(newFavouriteList)
    // setToggleHeart(!toggleHeart);
    // setFavorites(newFavouriteList)
    // for (let i = 0; i < newFavouriteList.length; i++) {
    //   let x = newFavouriteList[i]
    //   console.log(x)
    // }
    // console.log(newFavouriteList)

    let tempFavorites = favorites;
    tempFavorites.push(city.city)
    // console.log(...tempFavorites)
    setFavorites([...new Set(tempFavorites)]); // eliminate doubles
  }
  const deleteFavorite = (city) => {
    const filteredFav = favorites.filter(strCity => strCity !== city.city)
    setFavorites(filteredFav)
  }

  useEffect(() => {
    const json = JSON.stringify(favorites);
    localStorage.setItem("favorites", json)
  }, [favorites])

  return (
    <ThemeProvider theme={themeMode}>
      <FlexDiv>
        <h1>{date}</h1>
        <InputFilter />
        <div>
          <ul>
            {newArrSorted.map(obj => <li key={obj.city}>
              <CityCard >
                <CityCardImg onClick={createHandleClickForDestination(obj.city)}>
                  <img src={obj.image} alt='bild på strand' />
                </CityCardImg>
                <CityCardInfo>
                  {obj.city === newArrSorted[0].city ? <Green>Din bästa match!</Green> : null}
                  <h2>{obj.city}</h2>
                  <p>Medeltemperatur: {obj.temperatur}</p>
                  {favorites.includes(obj.city) ?
                    (<FaHeart onClick={() => deleteFavorite(obj)} style={{ color: 'red' }} />)
                    :
                    (<FiHeart onClick={() => AddFavourite(obj)} style={{ color: 'red' }} />)}
                </CityCardInfo>
              </CityCard>

            </li>)}
          </ul>
        </div>
      </FlexDiv>
    </ThemeProvider>
  );
}

export default Result;