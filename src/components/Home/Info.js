
import React from 'react'
import * as ROUTES from '../../constants/routes';
// import { Link } from 'react-router-dom'
import VanImg from '../../Images/TravelWithVan2.jpg';
import TravelImg from '../../Images/Travel2.jpg';
import { FaArrowRight } from 'react-icons/fa';
// import { useState } from "react";
import { StyledDiv, StyledImageDiv, StyledImg, StyledImgSmall, StyledH2, StyledP, StyledLink, StyledText, LinkWrapper } from './SelectionStyling';

function Info({ setTargetInfoClick }) {

    function handleClick() {
        let clicked = true;
        setTargetInfoClick(clicked);
    }
    return (
        <StyledDiv>
            <StyledImageDiv>
                <StyledImg src={VanImg}></StyledImg>
                <StyledImgSmall src={TravelImg}></StyledImgSmall>
            </StyledImageDiv>
            <StyledText>
                <StyledH2>Svårt att välja vart du ska resa?</StyledH2>
                <StyledP>Lugn, vi hjälper dig.<br />  </StyledP>
                <StyledP>Att resa är en väldigt personlig upplevelse. För att hjälpa dig att hitta ditt perfekta resmål har vi skapat en guide.
                <br /><br />Klicka på pilen nedan för att komma igång.
                </StyledP>
            </StyledText>
            <LinkWrapper>
                <StyledLink to={ROUTES.WIZ} onClick={handleClick}><FaArrowRight onClick={handleClick} /></StyledLink>
            </LinkWrapper>
        </StyledDiv>
    );
}
export default Info;
// Genom att välja när du vill åka och vilken temperatur som passar dig får du information om resmål som passar just dig!