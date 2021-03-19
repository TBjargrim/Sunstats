import React from 'react'
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom'
import VanImg from '../../Images/TravelWithVan2.jpg';
import { StyledDiv, StyledImg, StyledH2, StyledP, StyledLink, StyledText } from './SelectionStyling';




function SelectionPageOne() {

    return (
        <StyledDiv>
            <StyledImg src={VanImg}></StyledImg>
            <StyledText>
                <StyledH2>Svårt att välja vart du ska resa?</StyledH2>
                <StyledP>Vi kan hjälpa dig fatta ett beslut. Genom att söka på när du vill åka och vilken världsdel får du info om vilken stad som passar dig!</StyledP>
            </StyledText>
            <StyledLink to={ROUTES.SELECTION_TWO}>Nästa</StyledLink>
        </StyledDiv>
    )
}

export default SelectionPageOne

