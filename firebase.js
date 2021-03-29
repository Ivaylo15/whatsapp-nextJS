import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCf2GvG2BWVqAwG49JsLf72ogUaIBhIkbo",
    authDomain: "whatsapp-nextjs-8c865.firebaseapp.com",
    projectId: "whatsapp-nextjs-8c865",
    storageBucket: "whatsapp-nextjs-8c865.appspot.com",
    messagingSenderId: "831385456454",
    appId: "1:831385456454:web:83f87554bc5f4b433f5f47"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };