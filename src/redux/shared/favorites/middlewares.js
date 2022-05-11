import {
  addToFavoriteAction,
  deleteFromFavoritesAction,
  clearFavoritesAction,
} from './actions';

const addToFavorite = (element) => {
  return (dispatch) => {
    dispatch(addToFavoriteAction(element));
  };
};

const deleteFromFavorites = (elementId) => {
  return (dispatch) => {
    dispatch(deleteFromFavoritesAction(elementId));
  };
};

const clearFavorites = () => {
  return (dispatch) => {
    dispatch(clearFavoritesAction());
  };
};

export { addToFavorite, deleteFromFavorites, clearFavorites };
