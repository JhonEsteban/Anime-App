import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import HomeRoutes from './HomeRoutes';

const AnimeAppRouter = () => (
  <Router>
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route path='/' component={HomeRoutes} />
      <Redirect to='/login' />
    </Switch>
  </Router>
);

export default AnimeAppRouter;
