import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  HashRouter,
} from 'react-router-dom';

import useUserState from '../hooks/useUserState';

import Welcome from '../pages/welcome/Welcome';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

import HomeRoutes from './HomeRoutes';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import AppLoading from '../components/appLoading/AppLoading';
import Layout from '../components/layout/Layout';

const AppRouter = () => {
  const { hasSessionActive, loading } = useUserState();

  if (loading) {
    return <AppLoading />;
  }

  return (
    <Router>
      <HashRouter>
        <Switch>
          <PublicRoute
            hasSessionActive={hasSessionActive}
            path='/welcome'
            component={Welcome}
          />

          <PublicRoute
            hasSessionActive={hasSessionActive}
            path='/login'
            component={Login}
          />

          <PublicRoute
            hasSessionActive={hasSessionActive}
            path='/register'
            component={Register}
          />

          <Layout>
            <PrivateRoute
              hasSessionActive={hasSessionActive}
              path='/'
              component={HomeRoutes}
            />
          </Layout>

          <Redirect to='/welcome' />
        </Switch>
      </HashRouter>
    </Router>
  );
};

export default AppRouter;
