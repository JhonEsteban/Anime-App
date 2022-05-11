import types from './types';

const getMangasAction = (mangas) => ({
  type: types.getMangas,
  payload: mangas,
});

const setSingleMangaAction = (manga) => ({
  type: types.setSingleManga,
  payload: manga,
});

const resetSingleMangaAction = () => ({
  type: types.resetSingleManga,
});

export { getMangasAction, setSingleMangaAction, resetSingleMangaAction };
