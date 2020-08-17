import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Login from './views/Login/Login';
import NotFound from './views/NotFound/NotFound'
import PrivateRoute from './PrivateRoute'
import Dashboard from './views/user/Dashboard/Dashboard';
const Main = props => (
<Switch>
  {/*User will LogIn*/}
  <Route path='/' component={Login}/>
  {/* User is LoggedIn*/}
  <PrivateRoute path='/dashboard' component={Dashboard}/>
  {/*Page Not Found*/}
  <Route component={NotFound}/>
</Switch>
);
export default Main;