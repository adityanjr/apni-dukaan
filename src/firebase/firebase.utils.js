import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAPf8fh5eVu-9mdLLp_oG42rmEUsNiQKrs",
  authDomain: "react-dukaan.firebaseapp.com",
  projectId: "react-dukaan",
  storageBucket: "react-dukaan.appspot.com",
  messagingSenderId: "636843473325",
  appId: "1:636843473325:web:f41debca2c9d20e6514924",
  measurementId: "G-00CKP8YK5C",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
