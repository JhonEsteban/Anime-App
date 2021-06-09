import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Welcome from '../pages/welcome/Welcome';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import HomeRoutes from './HomeRoutes';

const AnimeAppRouter = () => (
  <Router>
    <Switch>
      <Route exact path='/welcome' component={Welcome} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route path='/' component={HomeRoutes} />
      <Redirect to='/welcome' />
    </Switch>
  </Router>
);

export default AnimeAppRouter;
