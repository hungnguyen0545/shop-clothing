import firebase, { initializeApp } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = 
{
    apiKey: "AIzaSyD6rtIGFWeB1UEZeuT86pEra5Tijd9itA8",
    authDomain: "shop-clothing-d1f14.firebaseapp.com",
    databaseURL: "https://shop-clothing-d1f14.firebaseio.com",
    projectId: "shop-clothing-d1f14",
    storageBucket: "shop-clothing-d1f14.appspot.com",
    messagingSenderId: "259025924590",
    appId: "1:259025924590:web:b17c76ca011a5c5ffe1eff",
    measurementId: "G-FERQFTHDMG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 