import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import thunk from 'redux-thunk';

import authReducer from './auth/reducer';
import animesReducer from './animes/reducer';
import mangasReducer from './mangas/reducer';
import charactersReducer from './characters/reducer';

import uiReducer from './shared/ui/reducer';
import favoritesReducer from './shared/favorites/reducer';

const reducers = combineReducers({
  auth: authReducer,
  animes: animesReducer,
  mangas: mangasReducer,
  characters: charactersReducer,
  ui: uiReducer,
  favorites: favoritesReducer,
});

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
