import s from './store_aside.module.scss';
import CategoriesList from '@/components/elements/categories_list/CategoriesList';
import ColorsFilter from '@/components/elements/colors_filter/ColorsFilter';
import { getCategories } from '@/app/lib/firebase/productapi';
import { getLocale } from 'next-intl/server';
import { getColors } from '@/app/lib/firebase/productapi';
import ResetLink from '@/components/elements/reset_link/ResetLink';
import clsx from 'clsx';


const StoreAside = async()=> {

const locale = await getLocale();
const data = await getCategories();
const colors = await getColors();



const categories = data?.map(({id, title})=> {return { slug: id, title: title[locale]}});
categories.unshift({title: 'Усі',
slug: 'all'});

const color_map = Object.keys(colors)?.map((key)=> {
return {title: colors[key].title[locale], color: colors[key].value, id: key, icon: colors[key].icon}});

    return (
        <aside className={s.aside}>
            <div className={ clsx(s.item_box,s.aside_head)}>
                <h3>Фільтри</h3>
                <ResetLink param={'category'}/>
            </div>
           
            <div className={s.item_box}>
                <CategoriesList links={categories}/>
            </div>
            <div className={s.item_box}>
            <div className={s.aside_head}>
                <h4>Кольори</h4>
                <ResetLink param ={'color'}/>
                </div>
                <ColorsFilter color_map={color_map}/>
            </div>

        </aside>
    )
};

export default StoreAside;