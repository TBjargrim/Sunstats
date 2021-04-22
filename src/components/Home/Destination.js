import { useParams, useLocation, useHistory } from "react-router-dom"
import { useEffect } from "react";
import styled from "styled-components";
import { Stockholm } from "../CollectedData/AverageTemp"
import { cityHistoric } from '../CollectedData/SelectedAvgTempCity';
import TestHumidity from '../CollectedData/AverageHumidity'
import TestTemp from '../CollectedData/AverageTemp'
import { ThemeProvider } from 'styled-components';
import { VingTheme, ApolloTheme } from '../ChangeBranding/ThemeStyled'
import { useVingMode } from '../ChangeBranding/LocalStorage'
import { fromRenderProps, mapProps } from "recompose";

import ving_logga from '../../Images/vinglogga_transparant.png'
import apollo_logga from '../../Images/apollologga_transparant.png'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';


const StyledWrapper = styled.div`
display:flex;
justify-content: center;
margin-top: 30px;
`
const StyledLogo = styled.div`
position: absolute;
text-align: center;
img{
    width: 70%;
    margin-left: 30px;
}
`
const CityCardImg = styled.div`
width: 100%;
img{
  width: 100%;
}
`;
const StyledContainer = styled.div`
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
    /* color: ${({ theme }) => theme.color}; */
    font-weight: 800;
    letter-spacing: 1px;
    font-size: 25px;
    margin: 0 0 15px 0;
}
h1 {
    font-size: 40px;
    font-weight: 900;
    /* color: ${({ theme }) => theme.h1}; */
    letter-spacing: 1px;
    margin:10px 0 10px 0;
}
`
const Header = styled.div`
width: 100%;
`
const StyledDiv = styled.div`
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
const InfoDestination = styled.div`
/* display:flex;
justify-content: center; */
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
const ComparisonDiv = styled.div`
/* background-color: whitesmoke; */
padding:5px 20px 20px 20px;
h3 {
    margin: 10px;
    /* color: orange; */
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

const Arrow = styled(FaArrowLeft)`
position: absolute;
z-index: 1;
background: transparent;
margin-top: 10px;
left: 20px;
font-size: 30px;
cursor:pointer;
color:${({ theme }) => theme.h1};
`

function Destination() {
    const { temp, date, destination } = useParams();
    const [theme, toggleTheme] = useVingMode();

    const history = useHistory();
    const state = history.location.state.temp;
    let sweState;

    function handleGoback() {
        window.history.back()
    }
    if (date === "January") {
        sweState = Stockholm[0];
    }
    if (date === "February") {
        sweState = Stockholm[1];
    }
    if (date === "March") {
        sweState = Stockholm[2];
    }
    if (date === "April") {
        sweState = Stockholm[3];
    }
    if (date === "May") {
        sweState = Stockholm[4];
    }
    if (date === "June") {
        sweState = Stockholm[5];
    }
    if (date === "July") {
        sweState = Stockholm[6];
    }
    if (date === "August") {
        sweState = Stockholm[7];
    }
    if (date === "September") {
        sweState = Stockholm[8];
    }
    if (date === "October") {
        sweState = Stockholm[9];
    }
    if (date === "November") {
        sweState = Stockholm[10];
    }
    if (date === "December") {
        sweState = Stockholm[11];
    }


    const themeMode = theme === 'ving' ? VingTheme : ApolloTheme;

    return (
        <ThemeProvider theme={themeMode}>

            <StyledWrapper>
                <Arrow onClick={handleGoback} />
                <StyledLogo>
                    <img src={theme === 'ving' ? ving_logga : apollo_logga} alt='Bild på strand' />
                </StyledLogo>

            </StyledWrapper>
            <CityCardImg>
                <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" alt="city" />
            </CityCardImg>

            <StyledContainer>
                <Header>
                    <InfoDestination>
                        <p>{date}</p>
                        <h1>{destination}</h1>
                        <h3>{state}ºC</h3>
                    </InfoDestination>
                    <ComparisonDiv>
                        <h3>Stockholm: <span>{sweState}ºC</span></h3>
                        <p>Det kommer vara <span>{state - sweState}ºC</span> varmare än hemma! </p>
                    </ComparisonDiv>
                </Header>
                <StyledDiv>
                    <TestTemp city={destination} data={cityHistoric[destination]} />
                </StyledDiv>
                <StyledDiv>
                    <TestHumidity city={destination} data={cityHistoric[destination]} />
                </StyledDiv>
            </StyledContainer>
        </ThemeProvider>)
}
export default Destination;