import types from './types';

const getAnimesAction = (animes) => ({
  type: types.getAnimes,
  payload: animes,
});

const setSingleAnime = (anime) => ({
  type: types.setSingleAnime,
  payload: anime,
});

const removeSingleAnimeAction = () => ({
  type: types.removeSingleAnime,
});

export { getAnimesAction, setSingleAnime, removeSingleAnimeAction };
