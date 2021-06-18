import { Provider } from 'react-redux';

import GlobalStyles from './assets/styles/GlobalStyles';
import AppRouter from './router/AppRouter';

import store from './store';

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <AppRouter />
  </Provider>
);

export default App;
