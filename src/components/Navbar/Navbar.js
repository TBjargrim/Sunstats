import React from 'react';
import * as ROLES from '../../constants/roles';
import SignOutButton from '../SignOut';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import Logo from '../../Images/logo.png'

const StyledNav = styled.nav`
 background-color:transparent;
 position:relative;


@media screen and (max-width:960px) {
    transition:0.8s all ease;
}
`
const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
`
const NavLogo = styled(Link)`
color:black;
justify-self:flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
margin-left:24px;
font-weight:bold;
text-decoration:none;
`
const MobileIcon = styled.div`
display:none;
@media screen and (max-width:768px) {
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%,60%);
    font-size:1.8rem;
    cursor:pointer;
}
`
const NavMenu = styled.ul`
display:flex;
flex-direction:row;
justify-content: center;
margin:50px;
@media screen and (max-width:768px) {
    display:none;
}
`
const NavItem = styled.li`
height:50px;
list-style: none;
a {
display:flex;
margin-top:5px;

margin-left:20px;
  text-decoration:none;
  color: #6B6B6B;
  margin-right:30px;
}
`


const BurgerMenyIcon = styled(FaBars)`
color:#F68F24;
`

const LogoImg = styled.img`
max-width:270px;
margin-top: -20px;
@media screen and (max-width:768px) {
    max-width:150px;
    margin-top:15px;
}
`

const Navbar = ({ authUser, toggle }) => {
  return (
    <StyledNav >
      <NavbarContainer>
        <NavLogo to='/home'><LogoImg src={Logo} /></NavLogo>
        <MobileIcon onClick={toggle}>
          <BurgerMenyIcon />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <Link to='/home'>Home</Link>
          </NavItem>
          <NavItem>
            <Link to='/account'>Min sida </Link>
          </NavItem>
          <NavItem>
            <Link to='/wiz'>Restyper</Link>
          </NavItem>
          {!!authUser.roles[ROLES.ADMIN] && (
            <NavItem>
              <Link to='/admin'>Admin</Link>
            </NavItem>
          )}

          <NavItem>
            <SignOutButton />
          </NavItem>
        </NavMenu>

      </NavbarContainer>
    </StyledNav>
  )
}

export default Navbar


