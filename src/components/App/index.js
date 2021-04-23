import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withAuthentication } from '../Session';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import * as ROUTES from '../../constants/routes';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import Wiz from "../Home/Wiz";
import Destination from '../Home/Destination';
import Result from "../Home/Result";
import Settings from '../Account/Settings';

import { VingTheme, ApolloTheme } from '../ChangeBranding/ThemeStyled'

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Raleway', sans-serif;
}
h1{
  color: ${({ theme }) => theme.h1};
}
p{
  color: ${({ theme }) => theme.text};
}
h3{
  color: ${({ theme }) => theme.text};
}
button{
  background: ${({ theme }) => theme.button.background};
  &:hover{
    background: ${({ theme }) => theme.button.hover.backgroundColor};
  }
  &:focus{
    background: ${({ theme }) => theme.button.hover.backgroundColor};
  }
}
Link{
  &:hover{
    color:${({ theme }) => theme.button.hover.backgroundColor};
  }
}
`
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'ving');

  const themeMode = theme === 'ving' ? VingTheme : ApolloTheme;

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const toggleTheme = () => {
    if (theme === 'ving') {
      window.localStorage.setItem('theme', 'apollo')
      setTheme('apollo');
    } else {
      window.localStorage.setItem('theme', 'ving')
      setTheme('ving');
    }
  }
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
      <Router>
        <>
          <h2>Branded by {theme === 'ving' ? 'Ving' : 'Apollo'}!</h2>
          <button onClick={toggleTheme}> Ändra resebolag</button>
          <GlobalStyle />
          <Navigation theme={theme} themeMode={themeMode} isOpen={isOpen} toggle={toggle} />
          <Switch>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route path={ROUTES.DESTINATION} component={Destination} />
            <Route path={ROUTES.RESULT} component={Result} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.WIZ} component={Wiz} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} theme={theme} />
            <Route path={ROUTES.SETTINGS} component={Settings} />
          </Switch>
        </>
      </Router>
    </ThemeProvider>
  )
};
export default withAuthentication(App);