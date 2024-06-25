import { db } from "./firebase";
import { collection, getDocs, addDoc , query, orderBy, limit, where, setDoc, doc,startAt} from "firebase/firestore";
import getImageRef from "./imageapi";

const prodPerPage = 3;


export const getCursors = async(slug, color)=>{
    const catalogue = slug === 'all'? null : slug;
    const cursors = [];
    const offset = (page)=>(page - 1) * prodPerPage;
    try {
          const ref = collection(db, "categories", 'catalogue_list', 'products');
    let q='';
if(catalogue && color){
    q =query(ref,where('category','==',catalogue), where("color", "==", color),orderBy("raiting"))}
else if(!catalogue && color) {
    q =query(ref,where("color", "==", color),orderBy("raiting"))}
else if(catalogue && !color){
    q =query(ref,where('category','==',catalogue),orderBy("raiting"))}
else{
    q = query(ref,orderBy("raiting"))}

    const productsSnapshot = await getDocs(q);
    const pageNumber = Math.ceil(productsSnapshot.docs.length / prodPerPage);
    for (let i = 1; i <= pageNumber; i++) {
      const cursorIndex = offset(i);
      const cursor = productsSnapshot.docs[cursorIndex] || null
      cursors.push(cursor)
        
    }
    return cursors

    } catch (error) {
        
    }

}


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


export const getProducts = async(catalogue,color, cursorEl)=>{
    const cursor = cursorEl? cursorEl : 0;
  
    if (catalogue === 'all'){
       
      const products = await getAllProducts(color,cursor);
      return products;
    } else {
        const products = await getProductsByCategory(catalogue,color, cursor)
        return products;
    }
}



export const getProductsByCategory = async (slug, color, cursor)=> {
  
    
   
    const ref = collection(db, "categories", 'catalogue_list', 'products');
    const q =color? query(ref,where('category','==',slug), where("color", "==", color),orderBy("raiting"), limit( prodPerPage),startAt(cursor)) : query(ref,where('category','==',slug),orderBy("raiting"), limit(prodPerPage),startAt(cursor));
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


export const getAllProducts = async (color,cursor)=> {
   
   
    const ref = collection(db, "categories", 'catalogue_list', 'products');
    const q = color? query(ref, where('color', "==", color),orderBy("raiting"),limit(prodPerPage), startAt(cursor)) : query(ref,orderBy("raiting"), limit(prodPerPage),startAt(cursor));
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





