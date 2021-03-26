import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Navbar/Sidebar'

// import Home from '../Home'
// import Account from '../Account'
import { AuthUserContext } from '../Session';
// import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
// import * as ROLES from '../../constants/roles';
import Logo from '../../Images/logo.png'
import styled from 'styled-components';

const Navigation = ({ isOpen, toggle }) => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} isOpen={isOpen} toggle={toggle} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser, isOpen, toggle }) => {
  return (
    <div>

      <Sidebar authUser={authUser} isOpen={isOpen} toggle={toggle} />
      <Navbar authUser={authUser} toggle={toggle} />

      {/* <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>

    {authUser.roles.includes(ROLES.ADMIN) && (
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>)}

     {!!authUser.roles[ROLES.ADMIN] && (
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    )}

    <li>
      <SignOutButton />
     </li>*/}
    </div>)
};

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
`
const NavigationNonAuth = () => (
  <StyledNav>
    <StyledLogo src={Logo}></StyledLogo>
    <li>
      <Link to={ROUTES.LANDING}>Back</Link>
    </li>
    {/* <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li> */}
  </StyledNav>
);

export default Navigation;
