import types from './types';

const initialState = {
  mangas: [],
  manga: {},
};

const mangasReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getMangas:
      return {
        ...state,
        mangas: [...action.payload],
      };

    case types.setSingleManga:
      return {
        ...state,
        manga: action.payload,
      };

    case types.resetSingleManga:
      return {
        ...state,
        manga: {},
      };

    default:
      return state;
  }
};

export default mangasReducer;
