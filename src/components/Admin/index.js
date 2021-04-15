import React, { Component, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';
import styled from 'styled-components';
import RenderTheme from '../ChangeBranding/RenderTheme';

const StyledDiv = styled.div`
margin-left:65px;
h2{
  font-size:27px;
  margin-left:65px;
  margin-top:55px;
}
ul{

}
li{
  list-style:none;
  margin:20px;
  max-width:450px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}
div{
  margin:5px;
  padding:5px;
}
`
const StyledLink = styled(Link)`
  text-decoration:none;
  border:solid 1px #EC8F21;
color:#EC8F21;
background-color: white;
border-radius:10px;
margin-top:7px;
margin-left:12px;
padding:2px;
a{
  text-decoration:none;
  margin-bottom:12px;
}
`
const AdminPage = () => (
  <div>
    <h1>Admin</h1>
    <p>Denna sida är endast tillgänglig för administratörer.</p>

    <Switch>
      <Route exact path={ROUTES.ADMIN_DETAILS} component={UserItem} />
      <Route exact path={ROUTES.ADMIN} component={UserList} />
    </Switch>
  </div>
);

class UserListBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on("value", (snapshot) => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map((key) => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <StyledDiv>
        <RenderTheme />
        <h2>Användare:</h2>
        { loading && <div>Loading ...</div>}
        <ul>
          {users.map(user => (
            <li key={user.uid}>
              <span>
                <strong>ID:</strong> {user.uid}
              </span>
              <span>
                <strong>E-post:</strong> {user.email}
              </span>
              <span>
                <strong>Användarnamn:</strong> {user.username}
              </span>
              <span>
                <StyledLink
                  to={{
                    pathname: `${ROUTES.ADMIN}/${user.uid}`,
                    state: { user },
                  }}
                >Mer information
                 </StyledLink>
              </span>
            </li>
          ))}
        </ul>
      </StyledDiv>
    );
  }
}

class UserItemBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      user: null,
      ...props.location.state,
    };
  }

  componentDidMount() {
    if (this.state.user) {
      return;
    }

    this.setState({ loading: true });

    this.props.firebase
      .user(this.props.match.params.id)
      .on('value', snapshot => {
        this.setState({
          user: snapshot.val(),
          loading: false,
        });
      });
  }

  componentWillUnmount() {
    this.props.firebase.user(this.props.match.params.id).off();
  }

  onSendPasswordResetEmail = () => {
    this.props.firebase.doPasswordReset(this.state.user.email);
  };

  render() {
    const { user, loading } = this.state;

    return (
      <div>
        <h2>Användare ({this.props.match.params.id})</h2>
        {loading && <div>Loading ...</div>}

        {user && (
          <div>
            <span>
              <strong>ID:</strong> {user.uid}
            </span>
            <span>
              <strong>E-post:</strong> {user.email}
            </span>
            <span>
              <strong>Användarnamn:</strong> {user.username}
            </span>
            <span>
              <button
                type="button"
                onClick={this.onSendPasswordResetEmail}
              >
                Skicka återställ lösenord
              </button>
            </span>
          </div>
        )}
      </div>
    );
  }
}

const UserList = withFirebase(UserListBase);
const UserItem = withFirebase(UserItemBase);

const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

// const condition = authUser =>
//   authUser && authUser.roles.includes(ROLES.ADMIN);

export default compose(
  withAuthorization(condition),
)(AdminPage);

