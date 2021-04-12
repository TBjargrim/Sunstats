import React, { useEffect } from 'react';
// import CollectedData from '../CachedData/CollectedData.txt'
import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import MyPage from './MyPage';

const AccountPage = () => (


  <AuthUserContext.Consumer >

    { authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
        <MyPage />
      </div>
    )}
  </AuthUserContext.Consumer >
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);