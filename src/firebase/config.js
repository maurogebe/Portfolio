import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyC2n2asB-iKMnUjNf_LAD6-PuJgc6pml8o",
    authDomain: "portfolio-mauricio.firebaseapp.com",
    projectId: "portfolio-mauricio",
    storageBucket: "portfolio-mauricio.appspot.com",
    messagingSenderId: "779440754027",
    appId: "1:779440754027:web:a6f7a04151b05bb9a7902e",
    measurementId: "G-7SG6YFFJNC"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const auth = firebase.auth()

  export default firebase