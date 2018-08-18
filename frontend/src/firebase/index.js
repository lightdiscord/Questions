import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_DATABASEURL,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID
};

export const app = firebase.initializeApp(config);

export const auth = firebase.auth;

export const handleAuthStateChanged = (store) => {
  auth().onAuthStateChanged((user) => {
    store.commit('storeUser', user);
  });
};
