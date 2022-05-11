import { firebase, GoogleAuthProvider } from '../../firebase';

import { loginUser, logoutUser } from './actions';

const registerUserWithEmailAndPassword = (name, email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(loginUser(user.uid, user.displayName));
      });
  };
};

const loginUserWithGoogleProvider = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(GoogleAuthProvider)
      .then(({ user }) => {
        dispatch(loginUser(user.uid, user.displayName));
      });
  };
};

const loginUserWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginUser(user.uid, user.displayName));
      });
  };
};

const closeUserSession = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(logoutUser());
      });
  };
};

export {
  registerUserWithEmailAndPassword,
  loginUserWithGoogleProvider,
  loginUserWithEmailAndPassword,
  closeUserSession,
};
