import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import styled from 'styled-components';
import { StyledButton } from "../PasswordChange/index"

const StyledInput = styled.input`
  width: 80%;
  margin: 5px 10px;
  padding: 5px;
  border: 1px solid lightgray;
  border-radius: 10px;

`;

const PasswordForgetPage = () => (
  <div>
    <h1>Lösenordsåterställning</h1>
    <PasswordForgetForm />
  </div>
);
const INITIAL_STATE = {
  email: '',
  error: null,
};
class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;
    const isInvalid = email === '';
    return (
      <form onSubmit={this.onSubmit}>
        <StyledInput
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="E-post"
        />
        <StyledButton disabled={isInvalid} type="submit">
          OK
</StyledButton>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
const StyledP = styled.p`
display:flex;
justify-content:center;
`
const StyledLink = styled(Link)`
text-decoration:none;
font-size:15px;
color: #6B6B6B;
letter-spacing:1px;
a{
  
}
`

const PasswordForgetLink = () => (
  <StyledP>
    <StyledLink to={ROUTES.PASSWORD_FORGET}>Glömt ditt lösenord?</StyledLink>
  </StyledP>
);
export default PasswordForgetPage;
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };