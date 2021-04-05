import styled from "styled-components";
import VanImg from '../../Images/TravelWithVan2.jpg';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { StyledText, StyledButtonWrapper, StyledButtons, StyledH2, StyledP, StyledLink, StyledLinkSkip, LinkWrapper, StyledIcon } from '../SelectionPages/SelectionStyling';
import React, { useState } from 'react'
import * as ROUTES from '../../constants/routes';

const Temp = ({ setTargetTemp }) => {

  const handleClick = (e) => {
    const temp = parseInt(e.target.value);
    setTargetTemp(temp);
  }

  return (
    <div>
      <StyledText>
        <StyledH2>Välj vilken typ av resa du är ute efter </StyledH2>
        <StyledP>Välj ett val som passar just dig</StyledP>
      </StyledText>
      <StyledButtonWrapper>
        <StyledButtons onClick={handleClick} value="5"><StyledIcon src={VanImg}></StyledIcon>Kallt</StyledButtons>
        <StyledButtons onClick={handleClick} value="15"><StyledIcon src={VanImg}></StyledIcon>Lagom</StyledButtons>
        <StyledButtons onClick={handleClick} value="25"><StyledIcon src={VanImg}></StyledIcon>Varmt</StyledButtons>
        <StyledButtons onClick={handleClick} value="35"><StyledIcon src={VanImg}></StyledIcon>Svettigt</StyledButtons>
      </StyledButtonWrapper>
      <StyledLinkSkip to={ROUTES.RESULT}>Hoppa över</StyledLinkSkip>
      <LinkWrapper>
        <StyledLink to={ROUTES.WIZ}><FaArrowLeft /></StyledLink>
        <StyledLink to={ROUTES.RESULT}><FaArrowRight /></StyledLink>
      </LinkWrapper>
    </div>
  );
}

export default Temp;