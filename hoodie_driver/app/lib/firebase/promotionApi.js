'use sever'
import { db } from "./firebase";
import { collection, getDocs, addDoc , query, orderBy, limit, where, setDoc, doc,startAt, Timestamp,getDoc, updateDoc} from "firebase/firestore";

const promoExample ={
    code: "SORRY",
    description: "Sorry discount",
    valid_from: "2024-09-01",
    valid_to: "2024-09-30",
    min_order_amount: 0,
    applicable_categories: [],
    discount: {
      gift_options: ['one', 'two', 'three'],
      type: "gift", 
      required_items_count: 0,
      gift_count: 0,
      value: 0
    },
    status: 'active',
    seasonal: false
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


const getGifts =async(idList)=> {
    const gifts = [];

    for (const id of idList) {
        const docRef = doc(db, 'gifts', id);
        try {
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                gifts.push({ id: docSnap.id, ...docSnap.data() });
            } else {
                console.log(`Документ з ID ${id} не знайдено.`);
            }
        } catch (error) {
            console.error(`Помилка при отриманні документа з ID ${id}:`, error);
        }
    }

    return gifts;
}

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

      const now = new Date();
      const promotion = promotions[0];
      
      if(promotion?.seasonal && (now < new Date(promotion.valid_from) || now > new Date(promotion.valid_to))){
        return {message: 'Дата дії промокоду не дійсна'}
      }

    if (promotion?.discount?.type === 'gift') {
         const gift_options = await getGifts(promotions[0]?.discount?.gift_options);
         const discount={...promotions[0]?.discount, gift_options}
         return {...promotions[0], discount}
    }

    return promotions[0];
} catch (e){
    console.log(e)  
}};
