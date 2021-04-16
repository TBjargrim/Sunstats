import { useParams } from "react-router-dom"
// import { CustomCollectedData, cityHistoric } from '../CachedData/CollectedData.txt';
// import VingLogga from '../../Images/ving_logga.png'
import styled from "styled-components";
// import { Avarage } from "../CachedData/Avarage";
import { cityHistoric } from '../CollectedData/SelectedAvgTempCity';
import TestHumidity from '../CollectedData/AverageHumidity'
import TestTemp from '../CollectedData/AverageTemp'
import { ThemeProvider } from 'styled-components';
import { VingTheme, ApolloTheme } from '../ChangeBranding/ThemeStyled'
import { useVingMode } from '../ChangeBranding/LocalStorage'


const StyledWrapper = styled.div`
display:flex;
justify-content: center;
`

const StyledLogo = styled.img`
width: 50%;
height:20%;
position: absolute;
background-color: transparent;
padding: 10px;
margin-top: 60px;
border-radius: 20px;
background-image:${({ theme }) => theme.backgroundImage};
background-repeat:${({ theme }) => theme.backgroundImageRepeat};
`
const CityCardImg = styled.div`
width: 100%;
/* height: 1000px; */
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
    color: ${({ theme }) => theme.text};
    font-weight: 800;
    letter-spacing: 1px;
    font-size: 19px;
    margin:15px 0 0 0;
}
h1 {
    font-size: 40px;
    font-weight: 900;
    color: #40A6BC;
    letter-spacing: 1px;
    margin:10px 0 30px 0;
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
function Destination() {
    const { date, destination } = useParams();
    const [theme, toggleTheme] = useVingMode();
    const themeMode = theme === 'ving' ? VingTheme : ApolloTheme;
    //Theme = ving /apollo 
    //ThemeMode = objectet med all styling
    console.log(themeMode)
    return (
        <ThemeProvider theme={themeMode}>
            <StyledWrapper>
                {/* src={VingLogga} alt='Bild på strand' */}
                <StyledLogo />
            </StyledWrapper>
            <CityCardImg>
                <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" alt="city" />
            </CityCardImg>
            <StyledContainer>
                <Header>
                    <p>{date}</p>
                    <h1>{destination}</h1>
                </Header>

                <StyledDiv>
                    <TestTemp city={destination} data={cityHistoric[destination]} />
                </StyledDiv>
                <StyledDiv>
                    <TestHumidity city={destination} data={cityHistoric[destination]} />
                </StyledDiv>
                {/* <StyledDiv>
                    <TestBubble date={date} city={destination} data={cityHistoric[destination]} />
                </StyledDiv> */}
            </StyledContainer>

        </ThemeProvider>)
}
export default Destination;