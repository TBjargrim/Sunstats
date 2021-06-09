import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';
import styled from 'styled-components';
import { StyledButton } from "../PasswordChange/index"

const DivWrapper = styled.div`
margin: 20px;
h1 {
  margin-top: 50px;
  margin-left: 15px;
}
`
const StyledWrapper = styled.div`
display:flex;
justify-content:space-around;
margin: 0 auto;
h2{
  font-size: 18px;
}
`
const StyledDiv = styled.div`
h2{
  font-size: 25px;
  margin-left: 20px;
}
ul{
padding-left: 20px;
margin: 0;
}
li{
  list-style:none;
  max-width:450px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  padding: 30px;
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
const StyledSpan = styled.span`
  display: flex;
  padding: 4px;
`
const AdminPage = ({ theme, themeMode, toggleTheme }) => (
  <>
    <DivWrapper>
      <h1>Admin</h1>
    </DivWrapper>
    <StyledWrapper>
      <h2>Branded by {theme === 'ving' ? 'Ving' : 'Apollo'}!</h2>
      <StyledButton onClick={toggleTheme}> Ändra resebolag </StyledButton>
    </StyledWrapper>
    <Switch>
      <Route exact path={ROUTES.ADMIN_DETAILS} component={UserItem} />
      <Route exact path={ROUTES.ADMIN} component={UserList} />
    </Switch>
  </>
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
        <h2>Användare:</h2>
        { loading && <div>Loading ...</div>}
        <ul>
          {users.map(user => (
            <li key={user.uid}>
              <StyledSpan>
                <strong>ID: </strong> {user.uid}
              </StyledSpan>
              <StyledSpan>
                <strong>E-post: </strong> {user.email}
              </StyledSpan>
              <StyledSpan>
                <strong>Användarnamn: </strong> {user.username}
              </StyledSpan>
              <StyledSpan>
                <StyledLink
                  to={{
                    pathname: `${ROUTES.ADMIN}/${user.uid}`,
                    state: { user },
                  }}
                >Mer information
                 </StyledLink>
              </StyledSpan>
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
      <>
        <h2>Användare ({this.props.match.params.id})</h2>
        {loading && <span>Loading ...</span>}
        {user && (
          <>
            <StyledSpan>
              <strong>ID: </strong> {user.uid}
            </StyledSpan>
            <StyledSpan>
              <strong>E-post: </strong> {user.email}
            </StyledSpan>
            <StyledSpan>
              <strong>Användarnamn: </strong> {user.username}
            </StyledSpan>
            <span>
              <StyledButton
                type="button"
                onClick={this.onSendPasswordResetEmail}
              >
                Skicka återställ lösenord
              </StyledButton>
            </span>
          </>
        )}
      </>
    );
  }
}

const UserList = withFirebase(UserListBase);
const UserItem = withFirebase(UserItemBase);

const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
  withAuthorization(condition),
)(AdminPage);

