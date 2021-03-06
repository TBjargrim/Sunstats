import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Navbar/Sidebar'
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';

import Logo from '../../Images/logo.png'
import styled from 'styled-components';

const StyledNav = styled.ul`
display: flex;
justify-content:space-between;
margin-right:25px;
li {
 list-style: none;
 margin-top: 10px;
}
a {
  text-decoration: none;
  color: #6B6B6B;
  font-size:14px;
}
`
const StyledLogo = styled.img`
max-width:130px;
margin-left: -30px;
align-items: flex-start;
`
const Navigation = ({ isOpen, toggle, themeMode, theme }) => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth theme={theme} themeMode={themeMode} authUser={authUser} isOpen={isOpen} toggle={toggle} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser, isOpen, toggle, themeMode, theme }) => {
  return (
    <>
      <Sidebar theme={theme} themeMode={themeMode} authUser={authUser} isOpen={isOpen} toggle={toggle} />
      <Navbar theme={theme} themeMode={themeMode} authUser={authUser} toggle={toggle} />
    </>)
};

const NavigationNonAuth = () => (
  <StyledNav>
    <StyledLogo src={Logo}></StyledLogo>
    <li>
      <Link to={ROUTES.LANDING}>Tillbaka</Link>
    </li>
  </StyledNav>
);

export default Navigation;
