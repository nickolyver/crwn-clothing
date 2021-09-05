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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;


  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = userRef.get();

  console.log(snapShot);

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set ({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  
  return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;