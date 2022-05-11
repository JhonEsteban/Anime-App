import urlBase from '../shared/api/urlBase';

import {
  removeErrorAction,
  setErrorAction,
  startLoadingAction,
  stopLoadingAction,
} from '../shared/ui/actions';

import { getMangasAction, setSingleMangaAction } from './actions';

const getMangas = () => {
  const query = `${urlBase}/top/manga`;

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

    const mangas = data.top;
    dispatch(getMangasAction(mangas));
    dispatch(stopLoadingAction());
  };
};

const getMangaById = (mangaId) => {
  const query = `${urlBase}/manga/${mangaId}`;

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
    dispatch(setSingleMangaAction(data));
    dispatch(stopLoadingAction());
  };
};

export { getMangas, getMangaById };
