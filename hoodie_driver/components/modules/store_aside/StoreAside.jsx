'use client'
import s from './store_aside.module.scss';
import CategoriesList from '@/components/elements/categories_list/CategoriesList';
import ColorsFilter from '@/components/elements/colors_filter/ColorsFilter';
import ResetLink from '@/components/elements/reset_link/ResetLink';
import ProductSearch from '@/components/elements/productSearch/ProductSearch';

import clsx from 'clsx';


const StoreAside =({categories, color_map, onCloseFilterMenu})=> {


    return (
        <aside className={s.aside}>

            <div className={ clsx(s.item_box,s.aside_head,s.search_wrapper)}>
                <h3>Фільтри</h3>
                <ResetLink param={'category'}/>
            </div>
            <div className={s.item_box}>
                <div className={clsx(s.aside_head,s.category_head,s.search_wrapper)}>
                    <h4 className={s.search_head}>Швидкий пошук</h4>
                </div>
                <div className={s.search_wrapper}>
                    <ProductSearch/>
                </div>
                
                <h4 className={s.colors_head}>Категорії</h4>
                <CategoriesList links={categories} onCloseFilterMenu={onCloseFilterMenu}/>
            </div>
            <div className={s.item_box}>
                <div className={s.aside_head}>
                    <h4 className={s.colors_head}>Кольори</h4>
                    <ResetLink param ={'color'}/>
                </div>
                <ColorsFilter color_map={color_map} onCloseFilterMenu={onCloseFilterMenu}/>
            </div>

        </aside>
    )
};

export default StoreAside;