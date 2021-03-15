import React, { useState } from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';

import styled from 'styled-components';
// import { FaTimes } from 'react-icons/fa';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const SideBarContainer = styled.aside`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#000;
display:grid;
align-items:center;
top:0;
left:0;
transition:0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top:${({ isOpen }) => (isOpen ? '0' : '-100%')};

`
// const CloseIcon = styled(FaTimes)`
// color:#fff;
// `
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
color:#fff;
`
const SidebarLink = styled(Link)`
display:flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
text-decoration:none;
list-style:none;
transition:0.2s ease-in-out;
text-decoration:none;
color:#fff;
cursor:pointer;

&:hover {
    color:#01bf71;
    transition:0.2s ease-in-out;
    background:#fff;
}
`
const NavButton = styled.li`
display:flex;
justify-content:center;
`
const NavBtnLink = styled(Link)`
border-radius:50px;
background:#01bf71;
white-space:nowrap;
padding:10px 22px;
color: #010606;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;
&:hover {
    transition:all 0.2s ease-in-out;
    background: #fff;
    color:#01bf71;
}
`
const SidebarMenu = styled.ul`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(6,80px);
text-align:center;

@media screen and(max-width:768px){
grid-template-rows:repeat(6,60px);
}
`
const Sidebar = ({ authUser, isOpen, toggle }) => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //     setIsOpen(!isOpen)
    //     console.log('func ran');
    // }

    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                {/* <CloseIcon /> */}
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink>
                        <Link to='/home' onClick={toggle}>Home</Link>
                    </SidebarLink>
                    <SidebarLink>
                        <Link to='/account' onClick={toggle}>Account</Link>
                    </SidebarLink>
                    <SidebarLink>
                        {!!authUser.roles[ROLES.ADMIN] && (
                            <Link to={ROUTES.ADMIN}>Admin</Link>)}
                    </SidebarLink>
                    <NavButton>
                        <div onClick={toggle}> <SignOutButton /> </div>
                    </NavButton>
                </SidebarMenu>
            </SidebarWrapper>
        </SideBarContainer>
    )
}

export default Sidebar;

