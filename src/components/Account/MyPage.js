import React from 'react'
import styled from "styled-components";
import London from '../../Images/LondonImage.jpg'
import Tokyo from '../../Images/TokyoImage.jpg'
import NY from '../../Images/NYimage.jpg'
import Barcelona from '../../Images/BarcelonaImage.jpg'
import Paris from '../../Images/ParisImage.jpg'

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
background-color:#D8DEE3;
border-radius:15px;
width:90%;
margin:30px auto;
padding: 5px;

@media screen and (max-width:980px) {
display: flex;
flex-direction: column;
}
`
const StyledP = styled.p`
  font-size:20px;
  text-align:left;
  width: 100%;
  padding:10px;
@media screen and (max-width:1000px) {
  width: 100%;
}
`
// const StyledExampelOne = styled.div`
// margin-bottom:20px;
// position:relative;
// /* width: 80%; */
// /* height: 100px; */
// img{
//   width:80%;
//   border-radius:10px;
//   /* height:5%; */
// }
// p{
//   position:absolute;
//   z-index:3;
//   color:white;
//   top:10px;
//   font-weight:800;
//   letter-spacing:2px;
//   text-align:center;
//   font-size:30px;
// }
// `
const StyledWrapperTwo = styled.div`
display:flex;
justify-content: center;
@media screen and (max-width:500px) {
flex-wrap: wrap;
}
`
const StyledExampelTwo = styled.div`
display:flex;
width:45%;
justify-content: center;
flex-wrap: wrap;
img{
width:40%;
height: 40%;
margin: 20px;
border-radius: 7px;
}
@media screen and (max-width:1000px) {
    width: 100%;
    img {
      margin: 10px;
    }
}
`
const StyledExampelThree = styled.div`
width:45%;
height: 50%;
display: flex;
justify-content: center;
img{
  width:82%;
  margin-top: 20px;
  border-radius: 7px;
}
@media screen and (max-width:1000px) {
  width:100%;
img{
  width:80%;
  height: 100%;
  margin-top: 10px;
}
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
        <StyledP>Utforska andra förslag för dig:</StyledP>
        {/* <StyledExampelOne>
          <img src={AlanyaImg} alt='bild på strand' />
          <p>Slappa på en av Jamaicas stränder</p>
        </StyledExampelOne> */}
        <StyledWrapperTwo>
          <StyledExampelTwo>
            <img src={London} alt='bild på strand' />
            <img src={NY} alt='bild på strand' />
            <img src={Barcelona} alt='bild på strand' />
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