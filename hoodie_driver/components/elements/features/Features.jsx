import s from './features.module.scss';
import { v4 } from 'uuid';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import prod from '../../../public/prod.svg?url';
import heart from '../../../public/heart.svg?url';
import pac from '../../../public/pac.svg?url';
import quality from '../../../public/quality.svg?url';


const featurItems = [ {url: pac, descr: 'pack'},{url: prod, descr: 'manufacturing'},
{url: heart, descr: 'approach'},{url: quality, descr: 'quality'}
    
];



const Features =()=>{
    const t = useTranslations("Home");

    return(
       
            <ul className={s.list}>
                {featurItems.map(({url, descr}) => { return <li key={v4()} className={s.list_item}>
                    <Image className={s.image} src={url} alt={t(`Hero.Features.${descr}`)}/>
                    <p className={s.title}>{t(`Hero.Features.${descr}`)}</p>
                </li>})}
           
            </ul>
       
    )
};


export default Features;