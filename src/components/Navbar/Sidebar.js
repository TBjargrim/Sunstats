import React from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import SignOutButton from '../SignOut';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';
import { VingTheme, ApolloTheme } from '../ChangeBranding/ThemeStyled'
import { useVingMode } from '../ChangeBranding/LocalStorage'

const SideBarContainer = styled.aside`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:${({ theme }) => theme.background};
top:0;
right:0;
transition:0.3s ease-in-out;
padding-top:60px;
box-shadow: -2px 0px 3px rgba(69, 69, 69, 0.25);
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top:${({ isOpen }) => (isOpen ? '0' : '-120%')};
`
const CloseIcon = styled(FaTimes)`
color:${({ theme }) => theme.h1};
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
const SidebarMenu = styled.ul`
display:flex;
flex-direction:column;
align-items:center;
margin-top:60px;
margin-right:25px;
padding:0px;
`
const StyledLI = styled.li`
list-style:none;
transition:0.2s ease-in-out;
margin-top:17px;
width:100%;
text-align:center;
padding:20px 0px;
&:hover {
    color:white;
    transition:0.2s ease-in-out;
}
`
const ButtonLI = styled.li`
display:flex;
justify-content:center;
margin-top:40px;
`
const StyledLink = styled(Link)`
font-size:1.7rem;
font-weight:700;
text-decoration:none;
color:${({ theme }) => theme.h1};
cursor:pointer;
`
const Sidebar = ({ authUser, isOpen, toggle }) => {
    const [theme] = useVingMode();
    const themeMode = theme === 'ving' ? VingTheme : ApolloTheme;

    return (
        <ThemeProvider theme={themeMode}>
            <SideBarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <div>
                    <SidebarMenu>

                        <StyledLI>
                            <StyledLink to='/account' onClick={toggle}>Min Profil</StyledLink>
                        </StyledLI>
                        <StyledLI>
                            <StyledLink to='/wiz' onClick={toggle}>Hitta resmål</StyledLink>
                        </StyledLI>
                        <StyledLI>
                            <StyledLink to='/settings' onClick={toggle}>Inställningar</StyledLink>
                        </StyledLI>
                        <StyledLI>
                            {!!authUser.roles[ROLES.ADMIN] && (
                                <StyledLink to={ROUTES.ADMIN}>Admin</StyledLink>)}
                        </StyledLI>

                        <ButtonLI>
                            <div onClick={toggle}> <SignOutButton /> </div>
                        </ButtonLI>
                    </SidebarMenu>
                </div>
            </SideBarContainer>
        </ThemeProvider>
    )
}

export default Sidebar;

