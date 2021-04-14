import React, { useState, useEffect } from 'react';
// import CollectedData from '../CachedData/CollectedData.txt'
import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import MyPage from './MyPage';
import styled from 'styled-components';
import Settings from './Settings';

const Styledh1 = styled.div`
display: flex;
justify-content:center;
font-size:30px;
font-weight:700;
text-transform:capitalize;
margin-top:20px;
animation-name: moveInleft;
    animation-duration: 3s;
@keyframes moveInleft {
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }

    80% {
        transform: translateX(10px);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
}
`;


const AccountPage = () => (


  <AuthUserContext.Consumer >
    {/* <Settings isOpened={isOpened} setIsOpened={setIsOpened} toggle={toggle} /> */}

    {authUser => (
      <div>
        <Styledh1>Hejsan {authUser.username}</Styledh1>
        <MyPage />
        <PasswordForgetForm />
        <PasswordChangeForm />

      </div>
    )}
  </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);