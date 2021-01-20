import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: "tienda-bigote.firebaseapp.com",
  projectId: "tienda-bigote",
  storageBucket: "tienda-bigote.appspot.com",
  messagingSenderId: "61719806373",
  appId: "1:61719806373:web:d81953ed85b2c88342a84c"
})

export function getFirebase(){
  return app;
}

export function getFirestore(){
  return firebase.firestore(app);
}