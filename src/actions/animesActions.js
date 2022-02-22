import types from '../types';

const apiBase = 'https://api.jikan.moe/v3';

const getAllResources = (resources) => ({
  type: types.getAllResources,
  payload: resources,
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

const getSingleManga = (manga) => ({
  type: types.addSingleManga,
  payload: manga,
});

const deleteSingleManga = () => ({
  type: types.deleteSingleManga,
});

const getSingleCharacter = (character) => ({
  type: types.addSingleCharacter,
  payload: character,
});

const deleteSingleCharacter = () => ({
  type: types.deleteSingleCharacter,
});

const deleteSingleResources = () => ({
  type: types.deleteSingleResources,
});

const getFoundAnimes = (animes) => ({
  type: types.addFoundAnimes,
  payload: animes,
});

const clearAllFoundAnimes = () => ({
  type: types.clearFoundAnimes,
});

const loadResources = () => {
  return (dispatch) => {
    const urls = [
      `${apiBase}/top/anime`,
      `${apiBase}/top/manga`,
      `${apiBase}/top/characters`,
    ];

    const fetchData = (url) => fetch(url).then((resp) => resp.json());

    Promise.all(urls.map(fetchData)).then(([animes, mangas, characters]) => {
      dispatch(
        getAllResources({
          animes: animes.top,
          mangas: mangas.top,
          characters: characters.top,
        })
      );
    });
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

const getMangaById = (mangaId) => {
  return (dispatch) => {
    dispatch(clearAllFoundAnimes());

    fetch(`${apiBase}/manga/${mangaId}`)
      .then((resp) => resp.json())
      .then((data) => dispatch(getSingleManga(data)));
  };
};

const getCharacterById = (characterId) => {
  return (dispatch) => {
    dispatch(clearAllFoundAnimes());

    fetch(`${apiBase}/character/${characterId}`)
      .then((resp) => resp.json())
      .then((data) => dispatch(getSingleCharacter(data)));
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
  loadResources,
  getAnimeById,
  getMangaById,
  getCharacterById,
  deleteSingleAnime,
  deleteSingleManga,
  deleteSingleCharacter,
  deleteSingleResources,
  addAnimeToFavorite,
  getAnimesByQueryString,
  clearAllFoundAnimes,
};
