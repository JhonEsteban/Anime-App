import types from './types';

const addToFavoriteAction = (payload) => ({
  type: types.addToFavorite,
  payload,
});

const deleteFromFavoritesAction = (id) => ({
  type: types.deleteFromFavorites,
  payload: id,
});

const clearFavoritesAction = () => ({
  type: types.clearFavorites,
});

export { addToFavoriteAction, deleteFromFavoritesAction, clearFavoritesAction };
