import { db } from "./firebase";
import { collection, getDocs, addDoc , query, orderBy, limit, where, setDoc, doc,startAt, Timestamp,getDoc} from "firebase/firestore";
import getImageRef from "./imageapi";
import { unstable_noStore as noStore } from "next/cache";

const prodPerPage = 3;


const sortObjectByField = (obj, field) => {
    // Перетворюємо об'єкт у масив
    const sortedArray = Object.entries(obj)
      .sort(([, a], [, b]) => a[field] - b[field]); // Сортуємо за полем field
  
    // Перетворюємо масив назад у об'єкт
    return Object.fromEntries(sortedArray);
  };


const constraintsMaker =({catalogue, color, cursor, isLimit,sort_by, ascending})=>{
    const slug = catalogue === 'all'? null : catalogue;
    const sort_val = sort_by? sort_by : 'priority';
    const sort_type = ascending? ascending : 'desc';

    const constraints = [];

          if(slug){constraints.push(where('category','==',slug))};
          if(color){constraints.push(where("color", "array-contains", color))};
          constraints.push(orderBy(sort_val, sort_type));
          if(isLimit){ constraints.push(limit(prodPerPage))};
          if(cursor){ constraints.push(startAt(cursor))};
          return constraints;

}

export const getCursors = async(slug, color, sort_by, ascending)=>{

    const cursors = [];
    const offset = (page)=>(page - 1) * prodPerPage;
    try {
        const ref = collection(db, "categories", 'catalogue_list', 'products');
        const constr = constraintsMaker({catalogue:slug, color:color, isLimit: false, sort_by: sort_by, ascending: ascending});

        const q = query(ref,...constr);
       
    const productsSnapshot = await getDocs(q);
    const pageNumber = Math.ceil(productsSnapshot.docs.length / prodPerPage);
    for (let i = 1; i <= pageNumber; i++) {
      const cursorIndex = offset(i);
      const cursor = productsSnapshot.docs[cursorIndex] || null
      cursors.push(cursor)
        
    }
   
    return cursors

    } catch (error) {
        console.log(error)
    }

}


export const getBestselers = async ()=> {

    const ref = collection(db, "categories", 'catalogue_list', 'products');
    const q = query(ref, where("category", "==", 'hoodie'), orderBy("raiting"), limit(8));
    try {
     
         let products =[];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const data = doc.data()
        const date = new Date(data.date * 1000).toLocaleString();
     const product = { id: doc.id,
    ...doc.data(), date};
    products.push(product)
    });
    return products
    } catch (e) {
        console.log(e)
    }
   
};


export const getProducts = async(catalogue,color, cursor, sort_by, ascending)=>{

    try {
   
        const ref = collection(db, "categories", 'catalogue_list', 'products');
        const constr = constraintsMaker({catalogue: catalogue,color: color, cursor: cursor,isLimit: true,sort_by: sort_by, ascending: ascending})
        const q=query(ref,...constr)
        
         
             let products =[];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const data = doc.data()
            const date = new Date(data.date * 1000).toLocaleString();
         const product = { id: doc.id,
        ...doc.data(), date};
        products.push(product)
        });
        return products
        } catch (e) {
            
        }    
}




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
        querySnapshot.forEach((doc) =>{ colors = {...doc.data().colors} });
        const sorted_colors = sortObjectByField(colors, 'priority');

      return sorted_colors;
     
    } catch (e){
        console.log(e)  
    }};


    export const getSingleProduct = async(slug)=>{

        try {
    const docRef = doc(db, "categories", 'catalogue_list', 'products',slug);
    const docSnap = await getDoc(docRef);
    const product = {...docSnap.data(),id: docSnap.id};
    return product;
        } catch (e) {
            console.log(e) 
        }


    }


    export const getAllProductsByCategory = async(category_name)=> {
        const ref = collection(db, "categories", 'catalogue_list', 'products');
        const q = query(ref, where("category", "==", category_name));
        try {
         
             let products =[];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const data = doc.data()
            const date = new Date(data.date * 1000).toLocaleString();
         const product = { id: doc.id,
        ...doc.data(), date};
        products.push(product)
        });
        return products
        } catch (e) {
            console.log(e)
        }
       

    }





export const addManyProducts = (products)=>{

    products.forEach(async (product) => {
        const {data, id} = product
        try {
            const docRef = await setDoc(doc(db, "categories", 'catalogue_list', 'products', id), {date: Timestamp.now(), ...data});
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
          console.error('Помилка при додаванні товару:', error);
        }
      });


}





