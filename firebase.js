// Import the functions you need from the SDKs you need
import firebase from 'firebase';
//import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd1E81V2qfeOLVnEvcSvSU6CkyvBnfrTQ",
  authDomain: "firebse-auth-ead6e.firebaseapp.com",
  projectId: "firebse-auth-ead6e",
  storageBucket: "firebse-auth-ead6e.appspot.com",
  messagingSenderId: "291769193005",
  appId: "1:291769193005:web:06faf4b8712a0e9f3e1ea4"
};

// Initialize Firebase

let app;
if (firebase.apps.length===0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}
const auth =firebase.auth()
export {auth};