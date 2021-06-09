import React from 'react';
import { withFirebase } from '../Firebase';
import styled from 'styled-components';

const StyledBtn = styled.button`
border: none;
padding: 10px;
color: white;
border-radius: 25px;
width:130px;
letter-spacing:1px;
cursor:pointer;
&:focus{
  outline:none;
}
`
const SignOutButton = ({ firebase }) => (
  <>
    <StyledBtn type="button" onClick={firebase.doSignOut}>Logga ut</StyledBtn>
  </>
);

export default withFirebase(SignOutButton);
