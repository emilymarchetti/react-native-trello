import * as firebase from 'firebase';
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyD_wYbKuBnicW6y9CjJZFzBV-wbto0wHDE",
  authDomain: "trello-react-92d88.firebaseapp.com",
  databaseURL: "https://trello-react-92d88.firebaseio.com",
  projectId: "trello-react-92d88",
  storageBucket: "trello-react-92d88.appspot.com",
  messagingSenderId: "994938242279",
  appId: "1:994938242279:web:fc8c6e3a29df15d2fece42",
  measurementId: "G-4Q722F5326"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export const database = firebase.firestore();