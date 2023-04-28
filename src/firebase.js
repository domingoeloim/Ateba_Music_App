import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB_hECWENSe0ONOvZfq4q68tRp-zKY7d1U",
  authDomain: "ateba-music.firebaseapp.com",
  databaseURL: "https://got-music.firebaseio.com",
  projectId: "ateba-music",
  storageBucket: "ateba-music.appspot.com",
  messagingSenderId: "964959583215",
  appId: "1:964959583215:web:fed8f789611be6651a141a",
  measurementId: "G-3H925WT3BL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;