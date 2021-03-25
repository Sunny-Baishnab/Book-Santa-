import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCmKqLBW9EqeNtwN-KHf8OrxQ3bRTbE0LI",
  authDomain: "book-santa-3cc12.firebaseapp.com",
  projectId: "book-santa-3cc12",
  storageBucket: "book-santa-3cc12.appspot.com",
  messagingSenderId: "43319971127",
  appId: "1:43319971127:web:2fdb034aeafc37f0b45eb2"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
