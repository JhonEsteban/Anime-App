import types from '../types';

const initialState = {
  animes: [],
  mangas: [],
  characters: [],
  anime: {},
  manga: {},
  character: {},
  favorites: [],
  foundAnimes: [],
};

const animesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getAllResources:
      return {
        ...state,
        animes: action.payload.animes,
        mangas: action.payload.mangas,
        characters: action.payload.characters,
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

    case types.addSingleManga:
      return {
        ...state,
        manga: { ...action.payload },
      };

    case types.deleteSingleManga:
      return {
        ...state,
        manga: {},
      };

    case types.addSingleCharacter:
      return {
        ...state,
        character: { ...action.payload },
      };

    case types.deleteSingleCharacter:
      return {
        ...state,
        character: {},
      };

    case types.deleteSingleResources:
      return {
        ...state,
        anime: {},
        manga: {},
        character: {},
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
