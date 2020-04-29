import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBJ-m1aPHWEwvml1yHhSja3ZlHqVSSXRYM",
    authDomain: "crwn-db-master2.firebaseapp.com",
    databaseURL: "https://crwn-db-master2.firebaseio.com",
    projectId: "crwn-db-master2",
    storageBucket: "crwn-db-master2.appspot.com",
    messagingSenderId: "196627988655",
    appId: "1:196627988655:web:79abe606c59f8793e4945a",
    measurementId: "G-M11KW0MSQ6"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;