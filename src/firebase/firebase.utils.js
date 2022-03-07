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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email,
                createdAt, 
                ...additionalData
            })
        } catch (error) {
            console.log("Error creating the user", error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;