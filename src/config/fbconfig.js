import firebase from 'firebase/app'
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyA8jcEbcAmmHSfmht_iijP86SB70u76iwA",
    authDomain: "evernote-clone-2425d.firebaseapp.com",
    databaseURL:"https://evernote-clone-2425d.firebaseio.com",
    projectId: "evernote-clone-2425d",
    storageBucket: "evernote-clone-2425d.appspot.com",
    messagingSenderId: "211845087062",
    appId: "1:211845087062:web:0869820e36794d93cae0f7"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase ;