const apiKey = process.env.REACT_APP_FIREBASE_APIKEY;
const authDomain = process.env.REACT_APP_FIREBASE_AUTHDOMAIN;
const projectId = process.env.REACT_APP_FIREBASE_PROJECTID;
const storageBucket = process.env.REACT_APP_FIREBASE_STORAGEBUCKET;
const messagingSenderId = process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID;
const appId = process.env.REACT_APP_FIREBASE_APPID;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Swal from "sweetalert2";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

try {
  
    // Initialize Firebase
    const firebaseApp = initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebaseApp.auth();

} catch (error) {
    Swal.fire('Error', error.toString(), 'error');
}

export { db, auth };