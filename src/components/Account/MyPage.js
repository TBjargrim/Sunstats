import React from 'react'
import styled from "styled-components";
import AlanyaImg from '../../Images/AlanyaImage.jpg'
import London from '../../Images/London.jpg'
import Tokyo from '../../Images/TokyoImage.jpg'
import NY from '../../Images/NY.jpg'
import Paris from '../../Images/Paris.jpg'

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
const CityCard = styled.div`
margin: 0;
padding: 5px;

h2{
font-size: 18px;
}
`;
const StyledImg = styled.div`
margin: 5px;
img{
  border-radius: 15px;
  float: left;
  width:  110px;
  height: 110px;
  object-fit: cover;
}
`

const StyledWrapper = styled.div`
background-color:#FFEEB0;
border-radius:20px;
width:90%;
margin:40px 20px;
padding: 10px 0;
`
const StyledP = styled.p`
  font-size:15px;
  text-align:left;
margin:10px 0px 9px 14px;
padding-top:10px;
`
const StyledExampelOne = styled.div`
margin-bottom:20px;
position:relative;
img{
  width:100%;
  border-radius:10px;
  height:170px;
}
p{
  position:absolute;
  z-index:3;
  color:white;
  top:10px;
  font-weight:800;
  letter-spacing:2px;
  text-align:center;
  font-size:30px;
}
`
const StyledWrapperTwo = styled.div`
display:flex;
width:100%;
`
const StyledExampelTwo = styled.div`
position:relative;
display:flex;
width:45%;
flex-wrap: wrap;
img{
width:42%;
margin: 5px;
border-radius: 7px;
}
p{
  position:absolute;
  z-index:3;
  color:white;
  top:10px;
  font-weight:800;
  letter-spacing:2px;
  text-align:center;
  font-size:30px;
}
`
const StyledExampelThree = styled.div`
width:45%;
margin: 5px;
img{
  width:100%;
  border-radius: 7px;
}
`
const MyPage = () => {

  let savedFav = JSON.parse(localStorage.getItem('favorites'));

  return (
    <div>
      <StyledDiv>
        <p>Dina valda favoriter: </p>
        <ul>
          {savedFav.map(obj => <li key={obj.city}>
            <CityCard >
              <StyledImg>
                <img src={obj.image} alt='bild på strand' />

              </StyledImg>
              <h2>{obj.city}</h2>
            </CityCard>
          </li>)}
        </ul>
      </StyledDiv>
      <StyledWrapper>
        <StyledP>Utforska även andra förslag till dig:</StyledP>
        <StyledExampelOne>
          <img src={AlanyaImg} alt='bild på strand' />
          <p>Slappa på en av Jamaicas stränder</p>
        </StyledExampelOne>
        <StyledWrapperTwo>
          <StyledExampelTwo>
            {/* <div> */}
            <img src={London} alt='bild på strand' />
            {/* <p>BIG</p> */}
            {/* </div> */}
            <img src={NY} alt='bild på strand' />
            {/* <div> */}
            <img src={NY} alt='bild på strand' />
            {/* <p>CITY</p> */}
            {/* </div> */}
            <img src={Tokyo} alt='bild på strand' />
          </StyledExampelTwo>
          <StyledExampelThree>
            <img src={Paris} alt='bild på strand' />
          </StyledExampelThree>
        </StyledWrapperTwo>
      </StyledWrapper>
    </div>
  )
}

export default MyPage
// const myFav = []
// console.log(localStorage.getItem('favorites'))
// useEffect(() => {
//   console.log('useeffect körs')
//   savedFav = JSON.parse(localStorage.getItem('favorites'));
//   if (savedFav) {
//     myFavvo = setMyFav(savedFav);
//   }

// }, [])
// const [items, setItems] = useState([]);
// useEffect(() => {
//   const items = JSON.parse(localStorage.getItem('items'));
//   if (items) {
//     setItems(items);
//   }
// });

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