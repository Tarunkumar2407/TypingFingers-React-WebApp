import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCRbtUWW-IA-rPuHQkgJfTUpfrBH5wtFBY",
    authDomain: "typing-speed-test-8eadc.firebaseapp.com",
    projectId: "typing-speed-test-8eadc",
    storageBucket: "typing-speed-test-8eadc.appspot.com",
    messagingSenderId: "876007325164",
    appId: "1:876007325164:web:e4bf6ec67eb1b8a4f114c9",
    measurementId: "G-2PYS08YVCZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebaseApp.firestore();

  export {auth, db}