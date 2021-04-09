import React from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import SignOutButton from '../SignOut';
// import { AuthUserContext } from '../Session';

import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';


const SideBarContainer = styled.aside`
position:fixed;
z-index:999;
width:60%;
height:100%;
background-color:#e7e7e7;
top:0;
right:0;
transition:0.3s ease-in-out;
padding-top:60px;
box-shadow: -2px 0px 3px rgba(69, 69, 69, 0.25);
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top:${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
const CloseIcon = styled(FaTimes)`
color:#9d9d9d;
`
const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`
const SidebarWrapper = styled.div`

`
const SidebarMenu = styled.ul`
display:flex;
flex-direction:column;
align-items:center;
margin-top:60px;
margin-right:25px;
padding:0px;

/* @media screen and(max-width:768px){
grid-template-rows:repeat(6,60px);
} */
`
const StyledLI = styled.li`
list-style:none;
transition:0.2s ease-in-out;
margin-top:30px;
width:100%;
text-align:center;
padding:20px 0px;
&:hover {
    color:white;
    transition:0.2s ease-in-out;
    background:#fff;
    /* margin:30px 0px; */
}
`
const ButtonLI = styled.li`
display:flex;
justify-content:center;
margin-top:40px;
`
const StyledLink = styled(Link)`
font-size:1.5rem;
text-decoration:none;
color:black;
cursor:pointer;
`
const Sidebar = ({ authUser, isOpen, toggle }) => {


    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <StyledLI>
                        <StyledLink to='/home' onClick={toggle}>Start</StyledLink>
                    </StyledLI>
                    <StyledLI>
                        <StyledLink to='/account' onClick={toggle}>Min sida</StyledLink>
                    </StyledLI>
                    <StyledLI>
                        <StyledLink to='/wiz' onClick={toggle}>Hitta resmål</StyledLink>
                    </StyledLI>
                    <StyledLI>
                        {!!authUser.roles[ROLES.ADMIN] && (
                            <StyledLink to={ROUTES.ADMIN}>Admin</StyledLink>)}
                    </StyledLI>
                    <ButtonLI>
                        <div onClick={toggle}> <SignOutButton /> </div>
                    </ButtonLI>
                </SidebarMenu>
            </SidebarWrapper>
        </SideBarContainer>
    )
}

export default Sidebar;

