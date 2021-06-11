import firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB0g_JgQLZrYTuMupAb7ePk6Z2lRCwp554',
  authDomain: 'animes-prime.firebaseapp.com',
  projectId: 'animes-prime',
  storageBucket: 'animes-prime.appspot.com',
  messagingSenderId: '1003204902591',
  appId: '1:1003204902591:web:7225d8f48f9c5cf319d00a',
};

firebase.initializeApp(firebaseConfig);

const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, GoogleAuthProvider };
