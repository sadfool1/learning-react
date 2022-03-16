import firebase from 'firebase/compat/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/compat/firestore';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAGtm0RbAWAj_B_-Gtpnyu7FhDE8bTfCeU",
  authDomain: "crown-db-f3eb0.firebaseapp.com",
  projectId: "crown-db-f3eb0",
  storageBucket: "crown-db-f3eb0.appspot.com",
  messagingSenderId: "198046314770",
  appId: "1:198046314770:web:8f4bd35e583bf4f25583cb",
  measurementId: "G-J0C6K1GGHK"
};


export const createUserProfileDocument  = async (userAuth) => {
  if (!userAuth) return;

  const userRef =  firestore.doc(`users/${userAuth.uid}`);
  const snapShot =  await userRef.get();

  if(!snapShot.exists()) {
    const {  displayName, email } =  userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
            })
    } catch (error){
      console.log("Error creating user", error.message);
    }
  }
}

firebase.initializeApp(config);

export const auth  =  firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
