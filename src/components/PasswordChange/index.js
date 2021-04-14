import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import styled from "styled-components";

const StyledForm = styled.div`
padding-bottom: 30px;
display: flex;
margin: auto;
background:#e8e8e8;
input {
  width: 90%;
  margin: 5px 10px;
  padding: 5px;
  border: 1px solid lightgray;
  border-radius: 10px;
}
`

const StyledButton = styled.button`
border:solid 1px #EC8F21;
color:#EC8F21;
background-color: white;
border-radius:10px;
margin-top:7px;
margin-left:12px;
`
const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};
class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { passwordOne } = this.state;
    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';
    return (
      <StyledForm>
      <form onSubmit={this.onSubmit}>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Nytt lösenord"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Bekräfta nytt lösenord"
        />
        <StyledButton disabled={isInvalid} type="submit">
          Återställ lösenord
</StyledButton>
        {error && <p>{error.message}</p>}
      </form>
      </StyledForm>
    );
  }
}
export default withFirebase(PasswordChangeForm);