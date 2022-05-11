import urlBase from '../shared/api/urlBase';

import {
  removeErrorAction,
  setErrorAction,
  startLoadingAction,
  stopLoadingAction,
} from '../shared/ui/actions';

import { getAnimesAction, setSingleAnime } from './actions';

const getAnimes = () => {
  const query = `${urlBase}/top/anime`;

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

    const animes = data.top;
    dispatch(getAnimesAction(animes));
    dispatch(stopLoadingAction());
  };
};

const getAnimeById = (animeId) => {
  const query = `${urlBase}/anime/${animeId}`;

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
    dispatch(setSingleAnime(data));
    dispatch(stopLoadingAction());
  };
};

export { getAnimes, getAnimeById };

// const getCharacterById = (characterId) => {
//   return (dispatch) => {
//     dispatch(clearAllFoundAnimes());

//     fetch(`${apiBase})
//       .then((resp) => resp.json())
//       .then((data) => dispatch(getSingleCharacter(data)));
//   };
// };

// const getAnimesByQueryString = (queryString) => {
//   return (dispatch) => {
//     dispatch(clearAllFoundAnimes());

//     fetch(`${apiBase}/search/anime?q=${queryString}&page=1&limit=10`)
//       .then((resp) => resp.json())
//       .then(({ results }) => dispatch(getFoundAnimes(results)));
//   };
// };
