import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Navbar/Sidebar'

import Home from '../Home'
import Account from '../Account'
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser, isOpen, toggle }) => (
  <div>

    <Sidebar authUser={authUser} isOpen={isOpen} toggle={toggle} />
    <Navbar authUser={authUser} toggle={toggle} />

    {/* <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>

    {authUser.roles.includes(ROLES.ADMIN) && (
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>)}

     {!!authUser.roles[ROLES.ADMIN] && (
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    )}

    <li>
      <SignOutButton />
    </li>*/}
  </div>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;

// {/* < Router >
//   <GlobalStyle />

//   {/* <Start /> */}


//   <Switch>
//     <Route path='/facial'> <Facials /></Route>
//     <Route path='/bookings' component={Booking}> </Route>
//     <Route path='/treatments' component={Treatments}></Route>
//     <Route path='/contact' component={Contact}> </Route>
//     <Route path='/products' component={Products}> </Route>

//     <Route exact path='/'><Start /> </Route>
//   </Switch>
// </Router > */}