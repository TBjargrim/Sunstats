import styled from 'styled-components';
import { Link } from 'react-router-dom'
// import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
export const StyledDiv = styled.div`
margin:0 50px;
`
export const StyledDivCalender = styled.div`

`
export const StyledImageDiv = styled.div`
text-align:center;
@media screen and (max-width:960px) {

}
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
/* border:1px solid blue; */
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
/* color: #353535; */

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
  /* background: linear-gradient(180deg, #F79521 0%, rgba(248, 98, 14, 0) 100%), #F36565; */
  &:focus{
    outline:none;
  }
  &:hover {
  /* background-color: #F8AF59; */
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
padding:15px 0px 5px 120px;
text-transform:uppercase;
letter-spacing:0.5px;
/* text-align:left; */
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
top:40%;
left:20%;
width:30px;
height:30px;
border-radius:100%;
@media screen and (max-width:1000px) {
    top:20%;
  }
`