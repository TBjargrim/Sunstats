import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import styled from 'styled-components';
import { StyledText } from "../Home/SelectionStyling";

const StyledH1 = styled.h1`
display:flex;
justify-content:center;
letter-spacing:1px;
`
const StyledForm = styled.form`
display:flex;
flex-direction:column;
align-items: center;
/* max-width:500px; */
margin:10px;


input{
  padding:5px 8px;
  margin-top:6px;
  width:300px;
}
button{
  margin-top:20px;
  display:flex;
  justify-content:center;
  background: linear-gradient(180deg, #F79521 0%, rgba(248, 98, 14, 0) 100%), #F36565;
border: none;
padding: 10px;
color: white;
border-radius: 25px;
width:200px;
letter-spacing:1px;
cursor:pointer;
&:hover {
  background-color: #F8AF59;
  border:1px solid #EC8F21;
}
&:focus{
  outline:none;
}
}
`

const SignUpPage = () => (
  <div>
    <StyledH1>Skapa konto</StyledH1>
     <SignUpForm />
</div>

);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne, isAdmin } = this.state;
    const roles = {};
    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
            roles,
          })
          
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.WIZ);
          })
          .catch((error) => {
            this.setState({ error });
          });
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAdmin,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <StyledForm onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="För- och efternamn"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="E-post"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Lösenord"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Bekräfta lösenord"
        />
        <div>
        <StyledText>Admin:</StyledText>

        </div>
    <input
            name="isAdmin"
            type="checkbox"
            checked={isAdmin}
            onChange={this.onChangeCheckbox}
          />
    

        <button disabled={isInvalid} type="submit">
          Logga in
        </button>

        {error && <p>{error.message}</p>}
      </StyledForm>
    );
  }
}


const StyledP = styled.p`
position: absolute;
bottom: 0;
text-align: center;
width: 100%;
border-top: 1px solid lightgray;
padding-top: 15px;
`
const StyledLink=styled(Link)`
margin-left:5px;
text-decoration:none;
font-weight:700;
letter-spacing:1px;
color: #F68F24;
text-transform:uppercase;
`

const SignUpLink = () => (
  <StyledP>
    Har du inget konto än? <StyledLink to={ROUTES.SIGN_UP}>Klicka här för att skapa konto</StyledLink>
  </StyledP>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };
