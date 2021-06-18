import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ hasSessionActive, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      hasSessionActive ? <Component {...props} /> : <Redirect to='/welcome' />
    }
  />
);

export default PrivateRoute;
