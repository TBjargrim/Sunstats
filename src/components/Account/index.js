import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import MyPage from './MyPage';
import styled from 'styled-components';

const Styledh1 = styled.div`
display: flex;
justify-content:center;
font-size:30px;
font-weight:700;
text-transform:capitalize;
margin-top:70px;
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
    {authUser => (
      <div>
        <Styledh1>Hejsan {authUser.username}</Styledh1>
        <MyPage />
      </div>
    )}
  </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);