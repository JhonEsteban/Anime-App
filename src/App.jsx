import { Provider } from 'react-redux';

import AnimeAppRouter from './router/AnimeAppRouter';
import GlobalStyles from './assets/styles/GlobalStyles';

import store from './store';

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <AnimeAppRouter />
  </Provider>
);

export default App;
