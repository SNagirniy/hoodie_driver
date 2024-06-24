import { db } from "./firebase";
import { collection, getDocs, addDoc , query, orderBy, limit, where, setDoc, doc} from "firebase/firestore";
import getImageRef from "./imageapi";
import { unstable_noStore as noStore } from "next/cache";


export const getBestselers = async ()=> {

    const ref = collection(db, "categories", 'catalogue_list', 'products');
    const q = query(ref, where("category", "==", 'hoodie'), orderBy("raiting"), limit(8));
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


export const getProducts = async(catalogue,color)=>{
    noStore();

    if (catalogue === 'all'){
       
      const products = await getAllProducts(color);
      return products;
    } else {
        const products = await getProductsByCategory(catalogue,color)
        return products;
    }
}



export const getProductsByCategory = async (slug, color)=> {
    noStore();
   
    const ref = collection(db, "categories", 'catalogue_list', 'products');
    const q =color? query(ref,where('category','==',slug), where("color", "==", color), limit(12)) : query(ref,where('category','==',slug), limit(12));
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


export const getAllProducts = async (color)=> {
    noStore();
    const ref = collection(db, "categories", 'catalogue_list', 'products');
    const q = color? query(ref, where('color', "==", color),limit(12)) : query(ref, limit(12));
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
const ref = collection(db, "categories",'catalogue_list', 'catalogue');
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





export const addManyProducts = (products)=>{

    products.forEach(async (product) => {
        const {data, id} = product
        try {
            const docRef = await setDoc(doc(db, "categories", 'catalogue_list', 'products', id), data);
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
          console.error('Помилка при додаванні товару:', error);
        }
      });


}





