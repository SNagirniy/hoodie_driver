'use sever'
import { db } from "./firebase";
import { collection, getDocs, addDoc , query, orderBy, limit, where, setDoc, doc,startAt, Timestamp,getDoc, updateDoc} from "firebase/firestore";

const promoExample ={
    code: "FIXED2024",
    description: "Fixed discount",
    valid_from: "2024-09-01",
    valid_to: "2024-09-30",
    min_order_amount: 1000,
    applicable_categories: ["keychains", 'hoodie'],
    discount: {
      type: "fixed", 
      required_items_count: 0,
      gift_count: 0,
      value: 300
    },
    status: 'active',
    seasonal: true
  };

export const addPromotion = async()=>{
    const docRef = await addDoc(collection(db, "promotions"), promoExample);
      console.log("Document written with ID: ", docRef.id);
};

export const getCurrentPromotion = async()=> {
    const ref = collection(db, "promotions");
    const q = query(ref, where("staus", "==", 'current'));
try {
    let promotions = []
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const item = { id: doc.id ,...doc.data()}
        promotions.push(item)
    });
    return promotions;
} catch (e){
    console.log(e)  
}}

export const checkPromotion = async(promocode)=> {
    const ref = collection(db, "promotions");
    const q = query(ref, where("code", "==", promocode));
try {
    let promotions = []
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const item = { id: doc.id ,...doc.data()}
        promotions.push(item)
    });
    if (promotions.length === 0) {
        return {message: 'Такого промокоду не існує'}
      };

    return promotions;
} catch (e){
    console.log(e)  
}}