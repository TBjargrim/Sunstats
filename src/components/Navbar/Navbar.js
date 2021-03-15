import React, { useState, useEffect } from 'react';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
import styled from 'styled-components';
// import { FaBars } from 'react-icons/fa';


const StyledNav = styled.nav`
 /* background-color:${({ scrollNav }) => (scrollNav ? '#918E8D' : 'transparent')}; */
 background-color:transparent;
/* height:80px;
margin-top:-80px;
display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
position:sticky;
top:0;
z-index:10; */

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
/* border: 2px solid green; */
a {
display:flex;
margin-top:5px;

margin-left:20px;
  /* border: 2px solid black; */
  text-decoration:none;
  color: #6B6B6B;
  margin-right:30px;
}
`
// const NavLinks = styled(Link)`
// color:black;
// display:flex;
// align-items:center;
// text-decoration:none;
// padding:0 1rem;
// height:100%;
// cursor:pointer;

// &.active {
//     border-bottom:3px solid #01bf71;
// }
// `

// const BurgerMenyIcon = styled(FaBars)`
// color:#000;`

const Navbar = ({ authUser, isOpen, toggle }) => {
  //   const [scrollNav, setScrollNav] = useState(false);
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggle = () => {
  //     setIsOpen(!isOpen)
  //   }
  //   const changeNav = () => {
  //     if (window.scrollY >= 80) {
  //       setScrollNav(true)
  //     } else {
  //       setScrollNav(false)
  //     }
  //   };
  //   useEffect(() => {
  //   }, [])
  return (
    // scrollNav={scrollNav}
    <StyledNav >
      <NavbarContainer>
        <NavLogo to='/home'>logo</NavLogo>
        <MobileIcon onClick={toggle}>
          {/* <BurgerMenyIcon /> */}
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <Link to='/home'>Home</Link>
          </NavItem>
          <NavItem>
            <Link to='/account'>Account</Link>
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


