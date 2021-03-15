import React from 'react';
import { withFirebase } from '../Firebase';
import styled from 'styled-components';

const StyledBtn = styled.button`
background: linear-gradient(180deg, #F79521 0%, rgba(248, 98, 14, 0) 100%), #F36565;
border: none;
padding: 10px;
color: white;
border-radius: 25px;
width:130px;
letter-spacing:1px;
cursor:pointer;
&:hover {
  background-color: #F8AF59;
  border:1px solid #EC8F21;
}
`
const StyledBtnOne = styled.div`

`



const SignOutButton = ({ firebase }) => (
  <StyledBtnOne>
    <StyledBtn type="button" onClick={firebase.doSignOut}>Sign Out</StyledBtn>
  </StyledBtnOne>
);

export default withFirebase(SignOutButton);
