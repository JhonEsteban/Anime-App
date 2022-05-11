import types from './types';

const intialState = {
  favorites: [],
};

const favoritesReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.addToFavorite:
      return {
        favorites: [action.payload, ...state.favorites],
      };

    case types.deleteFromFavorites:
      return {
        favorites: state.favorites.filter(
          (element) => element.id !== action.payload
        ),
      };

    case types.clearFavorites:
      return intialState;

    default:
      return state;
  }
};

export default favoritesReducer;
