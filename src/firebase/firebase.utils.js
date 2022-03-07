import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
    apiKey: "AIzaSyDwNq6puNdEHTCxEe8uADID-7L6yAIIEBQ",
    authDomain: "crwn-clothing-c5073.firebaseapp.com",
    projectId: "crwn-clothing-c5073",
    storageBucket: "crwn-clothing-c5073.appspot.com",
    messagingSenderId: "1096423527730",
    appId: "1:1096423527730:web:e811a8bf2608241decf32b",
    measurementId: "G-Z72DWNXHWK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;