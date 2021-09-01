import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyDvrM4biweaBAUTM8B1Zj60W5bFWaS3d0s",
    authDomain: "crwn-db-e1702.firebaseapp.com",
    projectId: "crwn-db-e1702",
    storageBucket: "crwn-db-e1702.appspot.com",
    messagingSenderId: "1079320695282",
    appId: "1:1079320695282:web:5dfcb2e5f786d548485b6b",
    measurementId: "G-S2WX883MKV"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;