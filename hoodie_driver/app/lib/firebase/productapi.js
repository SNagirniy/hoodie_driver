import { db } from "./firebase";
import { collection, getDocs, addDoc , query, orderBy, limit} from "firebase/firestore";


export const getBestselers = async ()=> {

    const ref = collection(db, "categories", "hoodies", "hoodie");
    const q = query(ref, orderBy("raiting"), limit(8));
    try {
         let products =[];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
     const product = { id: doc.id,
    ...doc.data()};
    products.push(product)
    });

    return products
    } catch (e) {
        console.log(e)
    }
   
};



/*
export const addManyProducts = (products)=>{

    products.forEach(async (product) => {
        try {
            const docRef = await addDoc(collection(db, "categories", "hoodies", "hoodie"), product);
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
          console.error('Помилка при додаванні товару:', error);
        }
      });


}*/





