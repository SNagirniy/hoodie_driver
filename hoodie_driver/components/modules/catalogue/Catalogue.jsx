
import s from './catalogue.module.scss';
import Card from '@/components/elements/card/Card';
import { getColors, getProducts } from '@/app/lib/firebase/productapi';


const Catalogue = async({category, color, cursor, sort_by, ascending})=> {

  const color_map = await getColors();
  const products = await getProducts(category, color,cursor,sort_by, ascending);

    return (
        <div className={s.catalogue_container}>
            <ul className={s.card_list}>
                {products?.map((prod)=> {return <li key={prod.id}><Card product={prod} color_map={color_map}/></li>})}
            </ul>
        </div>
    )
};


export default Catalogue;