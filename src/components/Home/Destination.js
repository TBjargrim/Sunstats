import { useParams, useHistory } from "react-router-dom"
import { ThemeProvider } from 'styled-components';

import { Stockholm } from "../CollectedData/AverageTemp"
import { cityHistoric } from '../CollectedData/SelectedAvgTempCity';
import TestHumidity from '../CollectedData/AverageHumidity'
import TestTemp from '../CollectedData/AverageTemp'

import { VingTheme, ApolloTheme } from '../ChangeBranding/ThemeStyled'
import { useVingMode } from '../ChangeBranding/LocalStorage'

import ving_logga from '../../Images/vinglogga_transparant.png'
import apollo_logga from '../../Images/apollologga_transparant.png'
import { StyledWrapper, StyledLogo, CityCardImg, StyledContainer, Header, StyledDivv, InfoDestination, ComparisonDiv, Arrow } from './SelectionStyling'

function Destination() {
    const { date, destination } = useParams();
    const [theme] = useVingMode();

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
                <StyledDivv>
                    <TestTemp city={destination} data={cityHistoric[destination]} />
                </StyledDivv>
                <StyledDivv>
                    <TestHumidity city={destination} data={cityHistoric[destination]} />
                </StyledDivv>
            </StyledContainer>
        </ThemeProvider>)
}
export default Destination;