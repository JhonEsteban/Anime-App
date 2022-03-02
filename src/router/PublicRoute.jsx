import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ hasSessionActive, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !hasSessionActive ? <Component {...props} /> : <Redirect to='/home' />
    }
  />
);

export default PublicRoute;
