import types from './types';

const getCharactersAction = (characters) => ({
  type: types.getCharacters,
  payload: characters,
});

const setSingleCharacterAction = (character) => ({
  type: types.setSingleCharacter,
  payload: character,
});

const removeSingleCharacterAction = () => ({
  type: types.removeSingleCharacter,
});

export {
  getCharactersAction,
  setSingleCharacterAction,
  removeSingleCharacterAction,
};
