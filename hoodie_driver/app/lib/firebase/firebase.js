import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";


  const firebaseConfig = {
    apiKey: process.env.FIREBASE_apiKey,
    authDomain: process.env.FIREBASE_authDomain,
    projectId: process.env.FIREBASE_projectId,
    storageBucket: process.env.FIREBASE_storageBucket,
    messagingSenderId: process.env.FIREBASE_messagingSenderId,
    appId: process.env.FIREBASE_appId,
    measurementId: process.env.FIREBASE_measurementId
  };
  
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const storage = getStorage(app)

  export {db, storage};

  export default app;
