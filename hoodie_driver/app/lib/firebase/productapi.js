'use server'
import { db } from "./firebase";
import { collection, getDocs, addDoc , query, orderBy, limit, where, setDoc, doc,startAt, Timestamp,getDoc, updateDoc} from "firebase/firestore";
import { getLocale } from "next-intl/server";
import isId from "@/utils/productIdCheck";
import capitalizeFirstLetters from "@/utils/capitalazeFirstLetter";

const prodPerPage = 3;



const sortObjectByField = (obj, field) => {
    // Перетворюємо об'єкт у масив
    const sortedArray = Object.entries(obj)
      .sort(([, a], [, b]) => a[field] - b[field]); // Сортуємо за полем field
  
    // Перетворюємо масив назад у об'єкт
    return Object.fromEntries(sortedArray);
  };

  const formatToString = (dateStamp, title)=> {
    
    const date = new Date(dateStamp * 1000).toLocaleString();
    for (const [key, value] of Object.entries(title)) {
        const text = value.join(' ');
        title[key]= capitalizeFirstLetters(text)
      }
   return {date, title}

  };


const constraintsMaker = async({catalogue, color, cursor, isLimit,sort_by, ascending, q})=>{
    const slug = catalogue === 'all'? null : catalogue;
    const sort_val = sort_by? sort_by : 'raiting';
    const sort_type = ascending? ascending : 'desc';

    const constraints = [];
    if(q && isId(q)){
        if(q){constraints.push(where("code", '==', q))}
          constraints.push(orderBy('raiting', 'desc'));
          if(isLimit){ constraints.push(limit(prodPerPage))};
          if(cursor){ constraints.push(startAt(cursor))};
    } else if (q && !isId(q)){
        const locale = await getLocale();
        if(q){constraints.push(where(`title.${locale}`, 'array-contains', q))
        }
        if(slug){constraints.push(where('category','==',slug))};
        constraints.push(orderBy(sort_val, sort_type));
        if(isLimit){ constraints.push(limit(prodPerPage))};
        if(cursor){ constraints.push(startAt(cursor))};
    }
    else{
        if(slug){constraints.push(where('category','==',slug))};
        if(color){constraints.push(where("color", "array-contains", color))};
        constraints.push(orderBy(sort_val, sort_type));
        if(isLimit){ constraints.push(limit(prodPerPage))};
        if(cursor){ constraints.push(startAt(cursor))};
    }
          return constraints;
}

export const getCursors = async(slug, color, sort_by, ascending, queryStr)=>{
    const cursors = [];
    const offset = (page)=>(page - 1) * prodPerPage;
    try {
        const ref = collection(db, "categories", 'catalogue_list', 'products');
        const constr = await constraintsMaker({catalogue:slug, color:color, isLimit: false, sort_by: sort_by, ascending: ascending, q: queryStr});

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
       const {date, title} = formatToString(data.date, data.title);
     const product = { id: doc.id,
    ...doc.data(), date, title};
    products.push(product)
    });
    return products
    } catch (e) {
        console.log(e)
    }
};


export const getProducts = async(catalogue,color, cursor, sort_by, ascending, queryStr)=>{

    try {
   
        const ref = collection(db, "categories", 'catalogue_list', 'products');
        const constr = await constraintsMaker({catalogue: catalogue,color: color, cursor: cursor,isLimit: true,sort_by: sort_by, ascending: ascending, q: queryStr})
        const q=query(ref,...constr)
        
         
             let products =[];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const data = doc.data()
            const {date, title} = formatToString(data.date, data.title);
         const product = { id: doc.id,
        ...doc.data(), date, title};
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
        const item = { id: doc.id ,...doc.data()}
        categories.push(item)
    });

    const sortedCategories = categories.sort((a,b) => {return a.priority - b.priority})
    return sortedCategories;
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
    const data = docSnap.data();
    const {date, title} = formatToString(data.date, data.title);
    const product = {...data,id: docSnap.id, date, title};
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
            const {date, title} = formatToString(data.date, data.title);
         const product = { id: doc.id,
        ...doc.data(), date,title};
        products.push(product)
        });
        return products
        } catch (e) {
            console.log(e)
        }}


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

export const updateProducts=async(fieldsToUpdateArr)=> {

    fieldsToUpdateArr?.map(async({id, data})=> {

        const docRef = doc(db,  "categories", 'catalogue_list', 'products', id);
        await updateDoc(docRef, {title: data?.title});
        console.log(`doc ${id} is updated`)
    })

}





