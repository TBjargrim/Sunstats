import React from 'react';
import CollectedData from '../CachedData/CollectedData'
import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
// import BrandedPage from '../BrandedPage/BrandedPage';

const AccountPage = () => (
  <AuthUserContext.Consumer>

    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
        {/* <CollectedData /> */}
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);