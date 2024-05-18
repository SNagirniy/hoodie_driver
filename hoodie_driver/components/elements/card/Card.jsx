

import s from './card.module.scss';
import Image from 'next/image';
import { Link } from '@/navigation';
import Shopping from '../../../public/shopping.svg';
import default_card from '../../../public/default_card.png';

const cardData={
    image: default_card,
}
const Card = ({title, price, available_colors})=> {
    const {image} = cardData;

    const renderColors =(arr)=> {
        const maxEl =3;
        if(arr.length <= maxEl) {return {colorMap: arr}};

        const displayedColors = arr.slice(0, maxEl);
        const remainingCount= arr.length - maxEl;
        return {colorMap: displayedColors, remainingCount }
    };

    const {colorMap, remainingCount} = renderColors(available_colors);


    return (
        <article className={s.card}> 
        
                <Link  className={s.card_link} href={'/product'}>
                    <div className={s.thumb}> 
                        <Image className={s.image} src={image} alt={title}/>
                    </div>
            <div className={s.info}>
                <div className={s.colors_box}>
                {available_colors?.length !== 0 &&
                    <ul className={s.colors}>
                       { 
                       colorMap.map((color) => {return(<li key={color} className={s.color} style={{background:color,}}></li>)})}
                    </ul>}
                    {remainingCount &&< span>{remainingCount}+</span>}
                
                </div>
                <span className={s.price}>{price}грн</span>
            </div>
            <h3 className={s.title}>{title}</h3>
            </Link>
            <button className={s.button}><span>Додати в кошик</span>
            <Shopping className={s.btn_icon}/>
            </button>

        </article>
    )
};

export default Card;