import Firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCTYQX-6GFym5Ie7lao6CPofNYU111j90c",
    authDomain: "laundryapp-fccf4.firebaseapp.com",
    projectId: "laundryapp-fccf4",
    storageBucket: "laundryapp-fccf4.appspot.com",
    messagingSenderId: "615022770911",
    appId: "1:615022770911:web:f86c522e5aa9f77974876a",
    measurementId: "G-VVCKRCYXXH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase