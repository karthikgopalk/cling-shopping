import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBMxGXxP78PJ7GSkrRfruf3XN417B8yuUo",
  authDomain: "cling-db.firebaseapp.com",
  projectId: "cling-db",
  storageBucket: "cling-db.appspot.com",
  messagingSenderId: "213717420786",
  appId: "1:213717420786:web:4648e2b48dd7d0e61f5e6b",
  measurementId: "G-4LMJM1GY2S"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;