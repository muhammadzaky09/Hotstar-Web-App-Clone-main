import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getStorage} from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID ,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  apiKey: "AIzaSyBqEFPmr4TauRv27DhKktm2Di6nFpJY0qc",
  authDomain: "disneyclone-dba02.firebaseapp.com",
  projectId: "disneyclone-dba02",
  storageBucket: "disneyclone-dba02.appspot.com",
  messagingSenderId: "812464689045",
  appId: "1:812464689045:web:bcb327cb7a7f4b22aaf09c",
  measurementId: "G-E4DES15Q7R"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const storage = getStorage(app);
export default getFirestore(app);

