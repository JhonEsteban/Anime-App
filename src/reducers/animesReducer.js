import types from '../types';

const initialState = {
  animes: [],
  anime: {},
  favorites: [],
  foundAnimes: [],
};

const animesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getAnimes:
      return {
        ...state,
        animes: [...action.payload],
      };

    case types.addToFavorites:
      return {
        ...state,
        favorites: [...action.payload, initialState.favorites],
      };

    case types.deleteFromFavorites:
      return {
        ...state,
        favorites: state.favorites.filter(
          (anime) => anime.id !== action.payload.id
        ),
      };

    case types.deleteAllFavorites:
      return {
        ...state,
        favorites: [],
      };

    case types.addSingleAnime:
      return {
        ...state,
        anime: { ...action.payload },
      };

    case types.deleteSingleAnime:
      return {
        ...state,
        anime: {},
      };

    case types.addFoundAnimes:
      return {
        ...state,
        foundAnimes: action.payload,
      };

    case types.clearFoundAnimes:
      return {
        ...state,
        foundAnimes: [],
      };

    default:
      return state;
  }
};

export default animesReducer;
