import types from './types';

const intialState = {
  characters: [],
  character: {},
};

const charactersReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.getCharacters:
      return {
        ...state,
        characters: [...action.payload],
      };

    case types.setSingleCharacter:
      return {
        ...state,
        character: action.payload,
      };

    case types.removeSingleCharacter:
      return {
        ...state,
        character: {},
      };

    default:
      return state;
  }
};

export default charactersReducer;
