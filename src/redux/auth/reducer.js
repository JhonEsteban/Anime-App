import types from './types';

const initialAuth = {
  id: '',
  name: '',
};

const authReducer = (state = initialAuth, action) => {
  switch (action.type) {
    case types.login:
      return {
        id: action.payload.uid,
        name: action.payload.displayName,
      };

    case types.logUp:
      return initialAuth;

    default:
      return state;
  }
};

export default authReducer;
