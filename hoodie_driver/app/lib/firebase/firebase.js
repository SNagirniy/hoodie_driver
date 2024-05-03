import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';





const firebaseConfig = {
  apiKey: "AIzaSyAhDPdsH8sXV_VIuuxw1wi_GxSkq0zUPL0",
  authDomain: "hoodiedriver-6cbd4.firebaseapp.com",
  projectId: "hoodiedriver-6cbd4",
  storageBucket: "hoodiedriver-6cbd4.appspot.com",
  messagingSenderId: "1041301327735",
  appId: "1:1041301327735:web:191f2f42e6a336a1ed5b72",
  measurementId: "G-ES2FX4PGGY"};
  
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  export {db};

  export default app;
