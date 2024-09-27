'use client'

import s from './card.module.scss';
import { Link } from '@/navigation';
import Shopping from '../../../public/shopping.svg';
import { useLocale } from 'next-intl';
import clsx from 'clsx';
import truncate from '@/utils/truncate';
import { useCart } from '@/contexts/cartContext';
import IconItem from './IconItem';
import ColorItem from './ColorItem';


const Card = ({product,color_map})=> {
    
    const { addToCart, isExist, hydrated } = useCart(); 
    const inCart = isExist(product.id);
    const locale = useLocale();


   if(!hydrated) {return null}; 

    const {title, price,available_colors, imageURL, id, color, category} = product;
    const renderColors =(arr)=> {
        const maxEl =3;
        if(arr.length <= maxEl) {return {colorMap: arr}};

        const displayedColors = arr.slice(0, maxEl);
        const remainingCount= arr.length - maxEl;
        return {colorMap: displayedColors, remainingCount }
    };

    const handleClick = ()=> {
        const data = {title: title, price, image: imageURL, id, ammount: 1, color, variant: 'default', category}
        addToCart(data)
       
    }

    const {colorMap, remainingCount} = renderColors(available_colors);


    return (
        <article className={s.card}> 
        
                <Link className={s.card_link} href={`/store/${id}`}>
                    <div className={s.thumb}> 
                        <img className={s.image} src={imageURL} alt={title[locale]}/>
                    </div>
            <div className={s.info}>
                <div className={s.colors_box}>
                {available_colors?.length !== 0 &&
                    <ul className={s.colors}>
                       { 
                       colorMap?.map((color) => {return color_map[color].value? <ColorItem key={color} color_value={color_map[color].value}/> : <IconItem key={color} icon={color_map[color].icon} icon_title={color_map[color].title[locale]}/>})}
                    </ul>}
                    {remainingCount &&< span>{remainingCount}+</span>}
                
                </div>
                <span className={s.price}>{price}грн</span>
            </div>
            <h3 className={s.title}>{truncate(title[locale],33)}</h3>
            </Link>
            <button disabled={inCart} onClick={handleClick} className={clsx(s.button, {[s.added]: inCart})}><span>{inCart ?"В кошику" : "Додати в кошик"}</span>
            <Shopping className={s.btn_icon}/>
            </button>

        </article>
    )
};

export default Card;