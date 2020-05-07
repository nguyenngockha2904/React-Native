
import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCgRNUe6jyrRTgfmumjoyJVYUapz3sEsMU",
    authDomain: "fir-rn-9f01e.firebaseapp.com",
    databaseURL: "https://fir-rn-9f01e.firebaseio.com",
    projectId: "fir-rn-9f01e",
    storageBucket: "fir-rn-9f01e.appspot.com",
    messagingSenderId: "830019041621",
    appId: "1:830019041621:web:3cf2cc4be32198b69197dc",
    measurementId: "G-C81EKHG7TT"
  };
  export const firebaseApp=firebase.initializeApp(firebaseConfig);