import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC-KtyR_Etl3MWqO2wh8aSihGaoBdF9VJY",
    authDomain: "photo-gallery-website-bbf1d.firebaseapp.com",
    projectId: "photo-gallery-website-bbf1d",
    storageBucket: "photo-gallery-website-bbf1d.appspot.com",
    messagingSenderId: "438435277375",
    appId: "1:438435277375:web:42b5cf1ab42d177a1ea68a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { projectStorage, projectFirestore, timestamp };
