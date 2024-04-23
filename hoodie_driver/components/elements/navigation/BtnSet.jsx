import Link from "next/link";
import s from './navigation.module.scss';
import clsx from "clsx";

import Image from "next/image";
 import lang_icon from '../../../public/lang_icon.svg';
 import Instagram from '../../../public/Instagram.svg';
 import shopping_icon from '../../../public/shopping-bag.svg';


const BtnSet = ()=> {

    return (
        <div className={s.nav_container}>
            <button className={clsx(s.button, s.lang)} type="button">
            <Image 
            className={clsx(s.icon, s.lang)}
        src={lang_icon}
        alt="language handler"/></button>
        <a className={clsx(s.button, s.yellow)} href="https://www.instagram.com/hoodie.driver/" target="_blank" rel="noopener noreferrer">
            <Image 
            className={s.icon}
        src={Instagram}
        alt="instagram link"/></a>
            <Link href={'/store'} className={clsx(s.button, s.blue)}>
            <Image 
            className={s.icon}
        src={shopping_icon}
        alt="shopping icon"/></Link>
            
        </div>

    )
};

export default BtnSet;