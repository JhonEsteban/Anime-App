import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  HashRouter,
} from 'react-router-dom';

import useUserState from '../hooks/useUserState';

import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

import HomeRoutes from './HomeRoutes';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import AppLoading from '../components/AppLoading';
import Layout from '../components/Layout';

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
            path='/auth/login'
            component={Login}
          />

          <PublicRoute
            hasSessionActive={hasSessionActive}
            path='/auth/register'
            component={Register}
          />

          <Layout>
            <PrivateRoute
              hasSessionActive={hasSessionActive}
              path='/'
              component={HomeRoutes}
            />
          </Layout>

          <Redirect to='/auth/login' />
        </Switch>
      </HashRouter>
    </Router>
  );
};

export default AppRouter;
