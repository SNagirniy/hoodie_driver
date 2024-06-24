
import s from './catalogue.module.scss';
import Card from '@/components/elements/card/Card';
import { getColors, getProducts } from '@/app/lib/firebase/productapi';


const Catalogue = async({searchParams})=> {

    const category = searchParams?.category ? searchParams?.category : 'all';

  const color_map = await getColors();
  const products = await getProducts(category, searchParams?.color);






    return (
        <div className={s.catalogue_container}>
            <ul className={s.card_list}>
                {products?.map(({id, title, price, available_colors, imageURL})=> {return <li key={id}><Card slug={id} titles={title} price={price} available_colors={available_colors} url = {imageURL} color_map={color_map}/></li>})}
            </ul>
        </div>
    )
};


export default Catalogue;