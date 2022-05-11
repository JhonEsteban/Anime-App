import types from './types';

const startLoadingAction = () => ({
  type: types.startLoading,
});

const stopLoadingAction = () => ({
  type: types.stopLoading,
});

const setErrorAction = (err) => ({
  type: types.setError,
  payload: err,
});

const removeErrorAction = () => ({
  type: types.removeError,
});

export {
  startLoadingAction,
  stopLoadingAction,
  setErrorAction,
  removeErrorAction,
};
