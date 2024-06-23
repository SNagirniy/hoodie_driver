'use client';
import s from './catalogue.module.scss';
import Card from '@/components/elements/card/Card';
import SortMenu from '@/components/elements/sort_menu/SortMenu';
import { useState } from 'react';
import { useSortedProducts } from '@/hooks/useSortedProducts';


const Catalogue =({color_map, products})=> {
const [sortId, setSortId]= useState(null);
const sortedProducts = useSortedProducts(products, sortId);


const changeSortValue = (id)=> {
    setSortId(id)
}





    return (
        <div className={s.catalogue_container}>
            <div className={s.menu_box}>
               <SortMenu sortValue={sortId} changeSortValue={changeSortValue}/>
            </div>
            <ul className={s.card_list}>
                {sortedProducts?.map(({id, title, price, available_colors, imageURL})=> {return <li key={id}><Card title={title} price={price} available_colors={available_colors} url = {imageURL} color_map={color_map}/></li>})}
            </ul>
        </div>
    )
};


export default Catalogue;