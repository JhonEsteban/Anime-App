import urlBase from '../shared/api/urlBase';

import {
  removeErrorAction,
  setErrorAction,
  startLoadingAction,
  stopLoadingAction,
} from '../shared/ui/actions';
import { getCharactersAction, setSingleCharacterAction } from './actions';

const getCharacters = () => {
  const query = `${urlBase}/top/characters`;

  return async (dispatch) => {
    dispatch(startLoadingAction());

    const response = await fetch(query);
    const data = await response.json();

    if (!response.ok) {
      dispatch(stopLoadingAction());
      dispatch(setErrorAction(data.message || ''));
      return;
    }

    dispatch(removeErrorAction());

    const characters = data.top;
    dispatch(getCharactersAction(characters));
    dispatch(stopLoadingAction());
  };
};

const getCharacterById = (characterId) => {
  const query = `${urlBase}/character/${characterId}`;

  return async (dispatch) => {
    dispatch(startLoadingAction());

    const response = await fetch(query);
    const data = await response.json();

    if (!response.ok) {
      dispatch(stopLoadingAction());
      dispatch(setErrorAction(data.message || ''));
      return;
    }

    dispatch(removeErrorAction());
    dispatch(setSingleCharacterAction(data));
    dispatch(stopLoadingAction());
  };
};

export { getCharacters, getCharacterById };
