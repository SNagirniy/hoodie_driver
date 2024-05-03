import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";


export const getProducts = async ()=> {
    try {
         let products =[];
    const querySnapshot = await getDocs(collection(db, "categories", "hoodies", "hoodie"));
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





