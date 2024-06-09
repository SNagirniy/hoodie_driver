import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";






/*const firebaseConfig = {
  apiKey: "AIzaSyAhDPdsH8sXV_VIuuxw1wi_GxSkq0zUPL0",
  authDomain: "hoodiedriver-6cbd4.firebaseapp.com",
  projectId: "hoodiedriver-6cbd4",
  storageBucket: "hoodiedriver-6cbd4.appspot.com",
  messagingSenderId: "1041301327735",
  appId: "1:1041301327735:web:191f2f42e6a336a1ed5b72",
  measurementId: "G-ES2FX4PGGY"};*/

  const firebaseConfig = {
    apiKey: "AIzaSyBfPdgmgz2rHN7mpGnBJuaMMEvmEGBiw-A",
    authDomain: "hoodie-driver-96728.firebaseapp.com",
    projectId: "hoodie-driver-96728",
    storageBucket: "hoodie-driver-96728.appspot.com",
    messagingSenderId: "229853583783",
    appId: "1:229853583783:web:115cb359269fdd2f59be82",
    measurementId: "G-GVHGZ11CB6"
  };
  
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const storage = getStorage(app)

  export {db, storage};

  export default app;
