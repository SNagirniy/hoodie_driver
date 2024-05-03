import s from './features.module.scss';
import { v4 } from 'uuid';
import Image from 'next/image';

import prod from '../../../public/prod.svg?url';
import heart from '../../../public/heart.svg?url';
import pac from '../../../public/pac.svg?url';
import quality from '../../../public/quality.svg?url';

const featurItems = [ {url: pac, descr: 'Подарункова упаковка'},{url: prod, descr: 'Власне виробництво'},
{url: heart, descr: 'Індивідуальний підхід'},{url: quality, descr: 'Гарантія якості'}
    
]



const Features =()=>{

    return(
       
            <ul className={s.list}>
                {featurItems.map(({url, descr}) => { return <li key={v4()} className={s.list_item}>
                    <Image className={s.image} src={url} alt={descr}/>
                    <p className={s.title}>{descr}</p>
                </li>})}
           
            </ul>
       
    )
};


export default Features;