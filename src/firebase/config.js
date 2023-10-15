import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyADKm2SqyhBfu-JDs6fKh9q3nmiNgHA_H8",
    authDomain: "olx-clone-d6e05.firebaseapp.com",
    projectId: "olx-clone-d6e05",
    storageBucket: "olx-clone-d6e05.appspot.com",
    messagingSenderId: "7472231970",
    appId: "1:7472231970:web:3c4686b407ea81716c3c7b",
    measurementId: "G-XJHYF5V7C1"
  };
export default  firebase.initializeApp  (firebaseConfig)