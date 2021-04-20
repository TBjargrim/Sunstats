
import Img1 from '../../Images/ParisImage.jpg';
import Img2 from '../../Images/TokyoImage.jpg';
import Img3 from '../../Images/BarcelonaImage.jpg';
import Img4 from '../../Images/KingstonImage.jpg';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { StyledText, StyledButtonWrapper, StyledButtons, StyledH2, StyledP, StyledLink, StyledLinkSkip, LinkWrapper, StyledIcon } from './SelectionStyling.js';
import React, { useState } from 'react'
import * as ROUTES from '../../constants/routes';

const Temp = ({ setTargetTemp, setTargetJumpOver, setTargetInfoClick }) => {
  const [selectedTemp, setSelectedTemp] = useState();

  const handleClick = (e) => {
    const value = parseInt(e.target.value);
    setSelectedTemp(value);
  }
  const handleNext = () => {
    setTargetTemp(selectedTemp);
  }
  const handleBack = () => {
    setTargetInfoClick(false);
  }
  const handleJump = () => {
    setTargetTemp(30);
    setTargetJumpOver(true);
  }
  return (

    <div>
      <StyledText>
        <StyledH2>Hitta din resa </StyledH2>
        <StyledP>Att resa är en väldigt personlig upplevelse. För att hjälpa dig att hitta ditt perfekta resmål  har vi skapat en guide. Du väljer temperaturintervall, genom att klicka nedan och vi ger dig tips på var du kan resa för sol och perfekt temperatur! </StyledP>
      </StyledText>
      <StyledButtonWrapper>
        <StyledButtons onClick={handleClick} value="5"><StyledIcon src={Img1}></StyledIcon> 0-10 grader: <br></br>På med tjockjackan! </StyledButtons>
        <StyledButtons onClick={handleClick} value="15"><StyledIcon src={Img2}></StyledIcon>10-20 grader: <br></br> Ta med en tunn jacka</StyledButtons>
        <StyledButtons onClick={handleClick} value="25"><StyledIcon src={Img3}></StyledIcon>20-30 grader: <br></br>För dig som älskar lagomt! </StyledButtons>
        <StyledButtons onClick={handleClick} value="35"><StyledIcon src={Img4}></StyledIcon>30-40 grader: <br></br>Strand och lata dagar!</StyledButtons>
      </StyledButtonWrapper>
      <StyledLinkSkip to={ROUTES.WIZ} onClick={handleJump}>Hoppa över</StyledLinkSkip>
      <LinkWrapper>
        <StyledLink onClick={handleBack} to={ROUTES.WIZ}><FaArrowLeft onClick={handleBack} /></StyledLink>
        <StyledLink onClick={handleNext} to={ROUTES.WIZ}> <FaArrowRight onClick={handleNext} /> </StyledLink>
      </LinkWrapper>
    </div>
  );
}

export default Temp;