import types from '../types';

const apiBase = 'https://api.jikan.moe/v3';

const getAnimes = (animes) => ({
  type: types.getAnimes,
  payload: animes,
});

const addAnimeToFavorite = (anime) => ({
  type: types.addToFavorites,
  payload: anime,
});

const getSingleAnime = (anime) => ({
  type: types.addSingleAnime,
  payload: anime,
});

const deleteSingleAnime = () => ({
  type: types.deleteSingleAnime,
});

const getFoundAnimes = (animes) => ({
  type: types.addFoundAnimes,
  payload: animes,
});

const clearAllFoundAnimes = () => ({
  type: types.clearFoundAnimes,
});

const loadAnimes = () => {
  return (dispatch) => {
    fetch(`${apiBase}/top/anime`)
      .then((resp) => resp.json())
      .then((data) => dispatch(getAnimes(data.top)));
  };
};

const getAnimeById = (animeId) => {
  return (dispatch) => {
    dispatch(clearAllFoundAnimes());

    fetch(`${apiBase}/anime/${animeId}`)
      .then((resp) => resp.json())
      .then((data) => dispatch(getSingleAnime(data)));
  };
};

const getAnimesByQueryString = (queryString) => {
  return (dispatch) => {
    dispatch(clearAllFoundAnimes());

    fetch(`${apiBase}/search/anime?q=${queryString}&page=1&limit=10`)
      .then((resp) => resp.json())
      .then(({ results }) => dispatch(getFoundAnimes(results)));
  };
};

export {
  loadAnimes,
  getAnimes,
  addAnimeToFavorite,
  getAnimeById,
  deleteSingleAnime,
  getAnimesByQueryString,
  clearAllFoundAnimes,
};
