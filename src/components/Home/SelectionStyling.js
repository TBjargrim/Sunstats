import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

export const StyledDiv = styled.div`
margin:0 50px;
`
export const StyledImageDiv = styled.div`
text-align:center;
`
export const StyledImg = styled.img`
width: 400px;
height:auto;
filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));
border-radius: 100%;
@media screen and (max-width:960px) {
    width: 150px;
    margin-left: 30px;
    margin-top: 30px;
}
@media screen and (max-width:400px) {
    width: 100px;
}
`
export const StyledImgSmall = styled.img`
width: 300px;
height:auto;
filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));
border-radius: 100%;
@media screen and (max-width:960px) {
    width: 100px;
}
@media screen and (max-width:400px) {
    width: 50px;
}
`
export const StyledText = styled.div`
margin:0px 300px;
@media screen and (max-width:960px) {
    margin:10px;
}
`
export const StyledH2Temp = styled.h2`
margin-top:35px;
text-align:center;
font-weight: 600;
font-size: 50px;
line-height: 45px;
@media screen and (max-width:960px) {
    font-size: 35px;
    margin-left: 10px;
}
@media screen and (max-width:400px) {
  font-size: 25px;
  line-height: 30px;
}
`

export const StyledH2 = styled.h2`
text-align:center;
font-weight: 600;
font-size: 50px;
line-height: 45px;
@media screen and (max-width:960px) {
    font-size: 35px;
    margin-left: 10px;
}
@media screen and (max-width:400px) {
  font-size: 25px;
  line-height: 30px;
}
`

export const StyledP = styled.p`
text-align:center;
font-weight: 400;
font-size: 20px;
line-height:23px; 
@media screen and (max-width:960px) {
    font-size: 18px;
    margin:10px;
}
@media screen and (max-width:400px) {
  font-size: 13px;
}
`
export const StyledLink = styled(Link)`
border:none;
width: 50px;
height: 50px;
border-radius:100%;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
color: white;
text-transform: uppercase;
letter-spacing: 2px;
margin: 20px 10px;
cursor: pointer;
transition: ease background-color 250ms; 
font-size: 40px;
text-align: center;
text-decoration: none;
padding: 15px 20px;
background: ${({ theme }) => theme.button.background};
  &:focus{
    outline:none;
  }
  &:hover {
  opacity:0.9;
  }
  @media screen and (max-width:1000px) {
    font-size: 35px;
    width: 35px;
    height: 35px;
  }
`
export const StyledButtonWrapper = styled.div`
position:relative;
left:50%;
transform:translateX(-50%);
max-width:650px;
  @media screen and (max-width:1000px) {
    width:327px;
  }
`
export const StyledButtons = styled.button`
position:relative;
min-width:300px;
background: #E4E4E4;
border: 1px solid #DBDBDB;
box-sizing: border-box;
border-radius: 20px;
margin:10px;
padding:8px 0px 8px 120px;
text-transform:uppercase;
letter-spacing:0.5px;
cursor:pointer;
animation-name:zoom;
animation-duration:3s;
span{
  font-style: italic;
  font-size: 12px;
}
@keyframes zoom {
  0% {
        transform: scale(1,1);
    }
    50% {
        transform: scale(1.2,1.2);
    }
    100% {
        transform: scale(1,1);
    }
}
&:focus{
outline:none;
  }
&:hover{
border: none;
box-sizing: border-box;
border-radius: 25px;
}
@media screen and (max-width:1000px) {
    width:200px;
    padding:10px 0px 10px 90px;
  }
`
export const LinkWrapper = styled.div`
display:flex;
justify-content:center;
`
export const StyledLinkSkip = styled(Link)`
text-decoration: none;
display:flex;
justify-content:center;
color:#4D4D4D;
cursor:pointer;
margin-top:20px;
margin-bottom:100px;
&:hover{
color:black;
}
@media screen and (max-width:1000px) {
    margin-top:15px;
    margin-bottom:20px;
  }
`
export const StyledIcon = styled.img`
position:absolute;
top:20%;
left:20%;
width:30px;
height:30px;
border-radius:100%;
@media screen and (max-width:1000px) {
    top:20%;
  }
`
export const CalendarDiv = styled.div`
padding-top: 160px; 
div {
  text-align: center;
}
`;
export const TravelBtn = styled.button`
  display: block;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 5px 40px 5px 40px;
  font-size: 20px;
  margin: 15px 0 10px 0;
&:active{
  outline:none;
}
`;
export const BtnDiv = styled.div`
display: flex;
justify-content: center;
margin-top: 30px;
`;
export const StyledWrapper = styled.div`
display:flex;
justify-content: center;
margin-top: 30px;
`
export const StyledLogo = styled.div`
position: absolute;
text-align: center;
img{
    width: 70%;
    margin-left: 30px;
}
`
export const CityCardImg = styled.div`
width: 100%;
img{
  width: 100%;
}
`;
export const StyledContainer = styled.div`
text-align: center;
display: flex;
flex-wrap: wrap;
justify-content: center;
background-color: white;
border-radius: 60px;
margin-top: -60px;
position: absolute;
width: 100%;
p {
    font-weight: 800;
    letter-spacing: 1px;
    font-size: 25px;
    margin: 0 0 15px 0;
}
h1 {
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 1px;
    margin:10px 0 10px 0;
}
`
export const Header = styled.div`
width: 100%;
`
export const StyledDivv = styled.div`
width: 40%;
height: 15%;
margin:20px 50px 70px 50px;

@media screen and (max-width:1100px) {
    margin:20px 20px 50px 20px;
    width: 45%;
}
@media screen and (max-width:860px) {
    width: 75%;
    margin:20px 15px 50px 15px;
}
`
export const InfoDestination = styled.div`
h3{
    margin: 10px;
    padding:0;
    /* color: orange; */
    font-size: 30px;
    font-weight:600;
    margin-bottom:10px;
}
h1{
    font-size:50px;
    letter-spacing:3px;
}
p{
    font-size: 20px;
    font-weight:600;
    margin:10px 30px 0 30px;
}
`
export const ComparisonDiv = styled.div`
padding:5px 20px 20px 20px;
h3 {
    margin: 10px;
    font-size: 25px;
    font-weight:500;
    margin-bottom:10px;
}
h3 span {
    font-size: 30px;
    margin-left:5px;
    font-weight:700;
}
p{
    font-size: 20px;
    font-weight:400;
    margin:0 30px;
}
p span {
    font-weight:500;
}
`
export const Arrow = styled(FaArrowLeft)`
position: absolute;
z-index: 1;
background: transparent;
margin-top: 10px;
left: 20px;
font-size: 30px;
cursor:pointer;
color:${({ theme }) => theme.h1};
`
export const Green = styled.p`
color: green;
margin-bottom: 10px;
font-weight: 600;
`;
export const FlexDiv = styled.div`
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
export const CityCard = styled.div`
display: flex;
position: relative;
flex-direction: row;
box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
margin: 15px;
border-radius: 30px;
div{
  display: flex;
}
`;
export const CityCardInfo = styled.div`
flex-direction: column;
width: 60%;
padding: 35px;
h2 {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  margin: 0px;
}
p {
  font-size: 15px;
  text-align: center;
  margin: 0;
  padding-top: 10px;

} p span{
    font-weight: 700;
    font-size: 18px;
  }
`;
export const CityCardImage = styled.div`
width: 20%;
align-items: flex-start;
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
}`
export const StyledFa = styled(FaHeart)`
color: red;
position: absolute;
right: 15px;
top: 17px;
font-size: 20px;
`
export const StyledFi = styled(FiHeart)`
color: red;
position: absolute;
right: 15px;
top:17px;
font-size:20px;
`