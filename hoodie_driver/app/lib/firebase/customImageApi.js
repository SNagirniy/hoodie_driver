'use server'
import { db } from "./firebase";
import { collection, getDocs,query} from "firebase/firestore";


export const getCustomImages = async()=>{
    const ref = collection(db, "custom");
    const q = query(ref);
    let images = []
    try {
        const querySnapshot = await getDocs(q);
       querySnapshot?.forEach((doc) => {images =[...doc?.data()?.src]});
      return images;
     
    } catch (e){
        console.log(e)  
    }};