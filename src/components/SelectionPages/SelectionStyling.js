import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const StyledDiv = styled.div`


`

export const StyledImg = styled.img`
width: 400px;
filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));
border-radius: 100%;
margin-left: 150px;
@media screen and (max-width:960px) {
    width: 200px;
    margin-left: 30px;
    margin-top: 30px;
}

`

export const StyledText = styled.div`
margin:0px 200px;
/* border:1px solid blue; */
@media screen and (max-width:960px) {
    margin:10px;
}
`
export const StyledH2 = styled.h2`
font-weight: 900;
font-size: 50px;
line-height: 59px;
color: #353535;
@media screen and (max-width:960px) {
    font-size: 35px;
    margin-left: 15px;
}
`

export const StyledP = styled.p`
text-align:center;
font-weight: 200;
font-size: 20px;
line-height: 23px;
@media screen and (max-width:960px) {
    font-size: 15px;
    margin:10px;
}
`
export const StyledLink = styled(Link)`


`