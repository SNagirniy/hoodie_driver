"use client";
import { useState, useEffect, useCallback } from 'react';
import s from './bestselers.module.scss';
import Card from '@/components/elements/card/Card';
import MainButton from '@/components/elements/mainButton/Main_Button';
import MainContainer from '@/components/layouts/MainCintainer';

import { getBestselers } from '@/app/lib/firebase/productapi';





const Bestselers =()=>{

    

    const [products, setProducts] = useState([]);

    const fetchData = useCallback(async () => {
        const data = await getBestselers();
      
            setProducts(data);
      }, [])

    useEffect(()=> {
       fetchData();

    },[fetchData])
    




    return(
        
        <section >
            <MainContainer>
                <div className={s.section}>
            <hgroup className={s.head}> <h2 className={s.title}>Наші бестселлери</h2>
            <p className={s.sub_title}>Худі на КПП та аксесуари, які ви купуєте найчастіше</p>
            </hgroup>
            <ul className={s.card_list}>
                {products.map(({id, title, price, available_colors})=> {return <li key={id}><Card title={title} price={price} available_colors={available_colors}/></li>})}
            </ul>
            <MainButton path={'./store'} title={'Хочу побачити всі'}/>
            </div>
            </MainContainer>
            
        </section>
    )
};

export default Bestselers;
