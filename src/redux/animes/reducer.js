import types from './types';

const initialState = {
  animes: [],
  anime: {},
};

const animesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getAnimes:
      return {
        ...state,
        animes: [...action.payload],
      };

    case types.setSingleAnime:
      return {
        ...state,
        anime: action.payload,
      };

    case types.removeSingleAnime:
      return {
        ...state,
        anime: {},
      };

    default:
      return state;
  }
};

export default animesReducer;
