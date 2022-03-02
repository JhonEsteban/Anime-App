import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ hasSessionActive, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      hasSessionActive ? (
        <Component {...props} />
      ) : (
        <Redirect to='/auth/login' />
      )
    }
  />
);

export default PrivateRoute;
