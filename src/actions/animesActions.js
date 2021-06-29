import types from '../types';

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

const loadAnimes = () => {
  return (dispatch) => {
    fetch('https://api.jikan.moe/v3/top/anime')
      .then((resp) => resp.json())
      .then((data) => dispatch(getAnimes(data.top)));
  };
};

const getAnimeById = (animeId) => {
  return (dispatch) => {
    fetch(`https://api.jikan.moe/v3/anime/${animeId}`)
      .then((resp) => resp.json())
      .then((data) => dispatch(getSingleAnime(data)));
  };
};

export {
  loadAnimes,
  getAnimes,
  addAnimeToFavorite,
  getAnimeById,
  deleteSingleAnime,
};
