import React from 'react'
import * as ROUTES from '../../constants/routes';
// import { Link } from 'react-router-dom';
import VanImg from '../../Images/TravelWithVan2.jpg';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { StyledText, StyledButtonWrapper, StyledButtons, StyledH2, StyledP, StyledLink, StyledLinkSkip, LinkWrapper, StyledIcon } from './SelectionStyling';

function SelectionPageTwo() {
    return (
        <div>
            <StyledText>
                <StyledH2>Välj vilken typ av resa du är ute efter </StyledH2>
                <StyledP>Välj ett val som passar just dig</StyledP>
            </StyledText>
            <StyledButtonWrapper>
                <StyledButtons>
                    <StyledIcon src={VanImg}></StyledIcon>
                    Strandhäng
                    </StyledButtons>
                <StyledButtons><StyledIcon src={VanImg}></StyledIcon>After Ski</StyledButtons>
                <StyledButtons><StyledIcon src={VanImg}></StyledIcon>Kyligt på kvällen</StyledButtons>
                <StyledButtons><StyledIcon src={VanImg}></StyledIcon>Torrt</StyledButtons>
            </StyledButtonWrapper>
            <StyledLinkSkip to={ROUTES.HOME}>Hoppa över</StyledLinkSkip>
            <LinkWrapper>
                <StyledLink to={ROUTES.SELECTION_ONE}><FaArrowLeft /></StyledLink>
                <StyledLink to={ROUTES.HOME}><FaArrowRight /></StyledLink>
            </LinkWrapper>
        </div>
    )
}

export default SelectionPageTwo
