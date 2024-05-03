"use client";
import { useState, useEffect, useCallback } from 'react';
import s from './bestselers.module.scss';
import Card from '@/components/elements/card/Card';
import { v4 } from 'uuid';

import { getProducts } from '@/app/lib/firebase/productapi';


const Bestselers =()=>{

    const [products, setProducts] = useState([]);

    const fetchData = useCallback(async () => {
        const data = await getProducts();
      
            setProducts([...data, ...data,...data,...data]);
      }, [])

    useEffect(()=> {
       fetchData();
       
      

    },[fetchData])




    return(
        <section className={s.section}>
            <hgroup className={s.head}> <h2 className={s.title}>Наші бестселлери</h2>
            <p className={s.sub_title}>Худі на КПП та аксесуари, які ви купуєте найчастіше</p>
            </hgroup>
            <ul className={s.card_list}>
                {products.map(({id, title, price, color_map})=> {return <li key={id}><Card title={title} price={price} color_map={color_map}/></li>})}
            </ul>
           
        </section>
    )
};

export default Bestselers;
