import types from './types';

const loginUser = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName },
});

const logoutUser = () => ({
  type: types.logUp,
});

export { loginUser, logoutUser };
