
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
                <StyledP>Vi kan hjälpa dig fatta ett beslut. Genom att söka på när du vill åka och vilken världsdel får du info om vilken stad som passar dig!</StyledP>
            </StyledText>
            <LinkWrapper>
                <StyledLink to={ROUTES.WIZ}><FaArrowRight onClick={handleClick} /></StyledLink>
            </LinkWrapper>
        </StyledDiv>
    );
}
export default Info;