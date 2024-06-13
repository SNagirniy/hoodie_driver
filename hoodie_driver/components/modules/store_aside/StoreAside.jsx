import s from './store_aside.module.scss';
import CategoriesList from '@/components/elements/categories_list/CategoriesList';
import ColorsFilter from '@/components/elements/colors_filter/ColorsFilter';
import { getCategories } from '@/app/lib/firebase/productapi';
import { getLocale } from 'next-intl/server';
import { getColors } from '@/app/lib/firebase/productapi';

const StoreAside = async()=> {

const locale = await getLocale();
const data = await getCategories();
const colors = await getColors();


const categories = data?.map(({id, title})=> {return { url: id, title: title[locale]}});
categories.unshift({title: 'Усі',
url: '/store/all'
})

console
const color_map = Object.keys(colors)?.map((key)=> { const {title, value} = colors[key]; 
return {title: title[locale], color: value, id: key}});


    return (
        <aside className={s.aside}>
            <div className={s.item_box}>
                <h3>Фільтри</h3>
            </div>
            <div className={s.item_box}>
                <CategoriesList links={categories}/>
            </div>
            <div className={s.item_box}>
                <h4>Кольори</h4>
                <ColorsFilter color_map={color_map}/>
            </div>

        </aside>
    )
};

export default StoreAside;