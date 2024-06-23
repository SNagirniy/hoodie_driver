'use client'
import { useState, useEffect } from "react";



const sortVariants = [
    {title: 'price',
    img: 'up',
    upward: true,
    id:"price_up"},
    {title: 'price',
    img: 'down',
    upward: false,
    id:"price_down"},
    {title: 'raiting',
    img: 'up',
    upward: true,
    id:"raiting_up"},
    {title: 'raiting',
    img: 'down',
    upward: false,
    id:"raiting_down"}
];






const useSortedProducts =(products, id)=>{
const [sortedProducts, setSortedProducts]=useState([]);

 
const handleSortProducts =(id)=>{
  const {upward, title} = sortVariants.find((item) => item.id === id);
  if(upward) {
    setSortedProducts(products.toSorted((a,b)=>{return b[title] - a[title]}))} else{
    setSortedProducts(products.toSorted((a,b)=>{ return a[title] - b[title]}))
    }
};

useEffect(()=> {
if(id) {handleSortProducts(id); return} else{
    setSortedProducts(products)
};
 }, [id]);

return sortedProducts;


}

export {useSortedProducts, sortVariants};