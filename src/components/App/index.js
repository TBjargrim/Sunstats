import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import { createGlobalStyle } from 'styled-components';
import Wiz from "../Home/Wiz";
import Destination from '../Home/Destination';
import Result from "../Home/Result";
import Settings from '../Account/Settings';
import { ThemeProvider } from 'styled-components';
import { VingTheme, ApolloTheme } from '../ChangeBranding/ThemeStyled'
import { useVingMode } from '../ChangeBranding/LocalStorage'


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
  const [theme, toggleTheme, componentMounted] = useVingMode();
  const themeMode = theme === 'ving' ? VingTheme : ApolloTheme;

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <ThemeProvider theme={themeMode}>
      <Router>
        <div>

          <GlobalStyle />
          <Navigation theme={themeMode} isOpen={isOpen} toggle={toggle} />
          <Switch>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route
              path={ROUTES.PASSWORD_FORGET}
              component={PasswordForgetPage} />
            <Route path={ROUTES.DESTINATION} component={Destination} />
            <Route path={ROUTES.RESULT} component={Result} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.WIZ} component={Wiz} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
            <Route path={ROUTES.SETTINGS} component={Settings} />

          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  )
};
export default withAuthentication(App);