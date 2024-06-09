import { db } from "./firebase";
import { collection, getDocs, addDoc , query, orderBy, limit} from "firebase/firestore";
import getImageRef from "./imageapi";


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
    await getImageRef()
    return products
    } catch (e) {
        console.log(e)
    }
   
};

export const getCategories = async()=> {
const ref = collection(db, "categories");
const q = query(ref);
try {
    let categories = []
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const item = { id: doc.id ,title: doc.data().title}
        categories.push(item)
    });
 return categories;
} catch (e){
    console.log(e)  
}};


export const getColors = async()=>{
    const ref = collection(db, "color_map");
    const q = query(ref);
    let colors={}
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) =>{ colors = {...doc.data().colors} })
      return colors;
     
    } catch (e){
        console.log(e)  
    }};




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





