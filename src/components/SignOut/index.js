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
  <div>
    <StyledBtn type="button" onClick={firebase.doSignOut}>Logga ut</StyledBtn>
  </div>
);

export default withFirebase(SignOutButton);
