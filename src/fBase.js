import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MESUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyArtGqybSlY9crxwNRQfGi0NLATEzvTZNc",
  authDomain: "ilove-17c6d.firebaseapp.com",
  databaseURL: "https://ilove-17c6d.firebaseio.com",
  projectId: "ilove-17c6d",
  storageBucket: "ilove-17c6d.appspot.com",
  messagingSenderId: "896666178169",
  appId: "1:896666178169:web:0ffc12371e2e8dc6d63aa8",
  measurementId: "G-4DWWNRZRNF",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const firebaseInstance = firebase;

export const authService = firebase.auth();

export const dbService = firebase.firestore();

export const storageService = firebase.storage();
