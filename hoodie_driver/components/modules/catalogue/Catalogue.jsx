import s from './catalogue.module.scss';
import Card from '@/components/elements/card/Card';

import { getColors, getProducts} from '@/app/lib/firebase/productapi';

const Catalogue = async({slug, color})=> {

const color_map = await getColors();

const products = await getProducts(slug, color);




    return (
        <ul className={s.card_list}>
                {products?.map(({id, title, price, available_colors, imageURL})=> {return <li key={id}><Card title={title} price={price} available_colors={available_colors} url = {imageURL} color_map={color_map}/></li>})}
            </ul>
    )
};


export default Catalogue;