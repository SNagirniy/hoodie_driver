import { db } from "./firebase";
import { collection, getDocs, addDoc , query, orderBy, limit, where} from "firebase/firestore";
import getImageRef from "./imageapi";
import { unstable_noStore as noStore } from "next/cache";


export const getBestselers = async ()=> {

    const ref = collection(db, "categories", "hoodie", "hoodie");
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


export const getProducts = async(slug,color)=>{
    noStore();
    const catalogue = slug[0];

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
   
    const ref = collection(db, "categories", slug, slug);
    const q =color? query(ref,where("color", "==", color), limit(9)) : query(ref, limit(9));
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

    try {
        const categories = await getCategories(); 
        const queries = categories?.map(col => {
            const collectionRef =  collection(db, "categories", col.id, col.id);
            const q =color? query(collectionRef,where("color", "==", color)) : query(collectionRef);

            return getDocs(q)
        });
        const products =[];
        const querySnapshots = await Promise.all(queries);

        querySnapshots?.forEach(querySnapshot => {
            querySnapshot.forEach(doc => {
                const product = { id: doc.id,
                    ...doc.data()};
                    products.push(product)
            });
        });

        return products;
    } catch (error) {
        console.error('Помилка отримання даних:', error);
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





