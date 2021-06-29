import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import thunk from 'redux-thunk';

import authReducer from '../reducers/authReducer';
import animesReducer from '../reducers/animesReducer';

const reducers = combineReducers({ auth: authReducer, animes: animesReducer });

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
