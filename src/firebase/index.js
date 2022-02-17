import firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAdiVVo2i49Ab_vhTHYiBB0m2Y3DYnZ60Y",
  authDomain: "animes-prime-fb95e.firebaseapp.com",
  projectId: "animes-prime-fb95e",
  storageBucket: "animes-prime-fb95e.appspot.com",
  messagingSenderId: "1044879097535",
  appId: "1:1044879097535:web:3cf5a59535f7727db1100a"
};

firebase.initializeApp(firebaseConfig);

const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, GoogleAuthProvider };
