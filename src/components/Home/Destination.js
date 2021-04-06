import { useParams } from "react-router-dom"
import { CustomCollectedData, cityHistoric } from '../CachedData/CollectedData';
import VingLogga from '../../Images/ving_logga.png'
import styled from "styled-components";

const StyledWrapper = styled.div`
display:flex;
justify-content: center;
/* width: 100%; */
`

const StyledLogo = styled.img`
width: 50%;
position: absolute;
background-color: white;
padding: 10px;
margin-top: 60px;
border-radius: 20px;
`
const CityCardImg = styled.div`
width: 100%;
img{
  width: 100%;
}
`;

const StyledContainer = styled.div`
text-align: center;
background-color: white;
/* padding: 20px; */
border-radius: 60px;
margin-top: -60px;
position: absolute;
width: 100%;
p {
    color: #40A6BC;
    font-weight: 800;
    letter-spacing: 1px;
    font-size: 19px;
    margin:20px 0 0 0;
}
h1 {
    font-size: 40px;
    font-weight: 900;
    color: #40A6BC;
    letter-spacing: 1px;
    margin:10px 0 40px 0;
}
`

function Destination() {
    const { temp, date, destination } = useParams();
    // console.log({ temp, date, destination })
    //let allYears = cityHistoric[destination];
    return (
        <>

            <StyledWrapper>
                <StyledLogo src={VingLogga} alt='Bild på strand' />
            </StyledWrapper>

            <CityCardImg>
                <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" alt="city" />
            </CityCardImg>
            <StyledContainer>
                <p>{date}</p>
                <h1>{destination}</h1>
                <CustomCollectedData city={destination} data={cityHistoric[destination]} />
            </StyledContainer>

        </>)
}

export default Destination;