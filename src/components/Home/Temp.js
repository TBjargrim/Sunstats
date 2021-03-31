import styled from "styled-components";
import VanImg from '../../Images/TravelWithVan2.jpg';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { StyledText, StyledButtonWrapper, StyledButtons, StyledH2, StyledP, StyledLink, StyledLinkSkip, LinkWrapper, StyledIcon } from '../SelectionPages/SelectionStyling';
import React, { useState } from 'react'
import * as ROUTES from '../../constants/routes';

const TravelSlc = styled.select`
  font-size: 18px;
  border-radius: 30px;
  margin: 0 0 30px 0;
  padding: 5px 60px 5px 60px;
  font-size: 20px;
  background: white;
  border: none;
  outline: none;
  box-shadow: 1px 2px 10px gray;
   background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    no-repeat right #fff;
  -webkit-appearance: none;
  background-position-x: 120px; 
`;

const Temp = ({setTargetTemp}) => {

   
  const handleClick = (e) => {
    const temp = parseInt(e.target.value);
    setTargetTemp(temp);
  }
      return(
    <div>
    <StyledText>
        <StyledH2>Välj vilken typ av resa du är ute efter </StyledH2>
        <StyledP>Välj ett val som passar just dig</StyledP>
    </StyledText>
    <StyledButtonWrapper>
        <StyledButtons onClick={handleClick} value="0"><StyledIcon src={VanImg}></StyledIcon>After Ski</StyledButtons>
        <StyledButtons onClick={handleClick} value="10"><StyledIcon src={VanImg}></StyledIcon>Vandring</StyledButtons>
        <StyledButtons onClick={handleClick} value="20"><StyledIcon src={VanImg}></StyledIcon>Tshirt-väder</StyledButtons>
        <StyledButtons onClick={handleClick} value="30"><StyledIcon src={VanImg}></StyledIcon>Strandhäng</StyledButtons>
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