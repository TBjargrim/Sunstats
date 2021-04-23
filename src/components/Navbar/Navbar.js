import React from 'react';
import * as ROLES from '../../constants/roles';
import SignOutButton from '../SignOut';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import ving_logga from '../../Images/vinglogga_transparant.png'
import apollo_logga from '../../Images/apollologga_transparant.png'


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
align-items: flex-start;
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
@media screen and (max-width:960px) {
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
flex-wrap: nowrap;
margin:50px;
@media screen and (max-width:960px) {
    display:none;
}
`
const NavItem = styled.li`
list-style: none;
a {
display:flex;
flex-wrap: nowrap;
width: 80px;
margin:5px 10px;
text-decoration:none;
color: #6B6B6B;
}
& a:last-child{
  padding-right: 35px;
  padding-left: -10px;
}
`
const BurgerMenyIcon = styled(FaBars)`
color:${({ theme }) => theme.h1};
`
const LogoImg = styled.img`
width: 180px;
margin: -20px;
margin-left:25px;
@media screen and (max-width:960px) {
  width: 20%;
    margin-top:25px;
    margin-left:25px;
}
`

const Navbar = ({ authUser, toggle }) => {

  return (
    <StyledNav >
      <NavbarContainer>
        <NavLogo to='/wiz'>
          {/* <LogoImg src={} /> */}
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <BurgerMenyIcon />
        </MobileIcon>
        <NavMenu>

          <NavItem>
            <Link to='/account'>Min Profil</Link>
          </NavItem>
          <NavItem>
            <Link to='/wiz'>Sök resa</Link>
          </NavItem>
          {!!authUser.roles[ROLES.ADMIN] && (
            <NavItem>
              <Link to='/admin'>Admin</Link>
            </NavItem>
          )}
          <NavItem>
            <Link to='/settings'>Inställningar</Link>
          </NavItem>
          <NavItem>
            <SignOutButton />
          </NavItem>
        </NavMenu>

      </NavbarContainer>
    </StyledNav>
  )
}

export default Navbar


