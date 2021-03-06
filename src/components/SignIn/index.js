import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { PasswordForgetLink } from '../PasswordForget';
import styled from 'styled-components'

const StyledH1 = styled.h1`
display:flex;
justify-content:center;
letter-spacing:1px;
`
const StyledForm = styled.form`
display:flex;
flex-direction:column;
align-items: center;
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
const Message = styled.h4`
font-size:25px;
margin-top:200px;
`
const StyledDiv = styled.div`
text-align:center;
`
const SignInPage = () => (
  <StyledDiv>
    <StyledH1>Logga in</StyledH1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </StyledDiv>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.WIZ);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <StyledForm onSubmit={this.onSubmit}>
        <Message>När du skapar ett konto använd INTE din riktiga e-mail adress.<br />
          Anledningen är att vi inte kan ta ansvar för dina personliga uppgifter.</Message>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="E-post"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Lösenord"
        />
        <button disabled={isInvalid} type="submit">Logga in</button>
        {error && <p>{error.message}</p>}
      </StyledForm>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)
  (SignInFormBase);

export default SignInPage;
export { SignInForm };