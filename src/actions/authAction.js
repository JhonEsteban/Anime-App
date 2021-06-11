import { firebase, GoogleAuthProvider } from '../firebase';
import types from '../types';

const loginUser = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName },
});

// eslint-disable-next-line arrow-body-style
const registerUserWithEmailAndPassword = (name, email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });

        const { uid, displayName } = user;
        dispatch(loginUser(uid, displayName));
      });
  };
};

// eslint-disable-next-line arrow-body-style
const registerUserWithGoogleProvider = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(GoogleAuthProvider)
      .then(({ user }) => {
        const { uid, displayName } = user;
        dispatch(loginUser(uid, displayName));
      });
  };
};

export { registerUserWithEmailAndPassword, registerUserWithGoogleProvider };
