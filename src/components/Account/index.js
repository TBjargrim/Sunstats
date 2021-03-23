import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { Aruba2017Jan, Aruba2018Jan, Aruba2019Jan } from '../../CachedData/CachedDataAruba';

const ArubaArr = [Aruba2017Jan, Aruba2018Jan, Aruba2019Jan];

let resultArr = [];

for (let i = 0; i < ArubaArr.length; i++) {
  resultArr.push(parseInt(ArubaArr[i].data.weather[0].avgtempC));
}

let avgSum;
for (var i = 0, sum = 0; i <= resultArr.length; sum += resultArr[i++]) {
  avgSum = sum / resultArr.length
};
// console.log(avgSum.toFixed(1))

const AccountPage = () => (

  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <p>Medeltemperaturen för Aruba i januari är: {avgSum.toFixed(1)}</p>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);