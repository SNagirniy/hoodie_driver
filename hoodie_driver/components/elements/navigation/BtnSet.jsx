import { Link } from '@/navigation';
import s from './navigation.module.scss';
import clsx from "clsx";

 import Lang from '../../../public/lang_icon.svg';
 import Instagram from '../../../public/Instagram.svg';
 import Shopping from '../../../public/shopping.svg';



const BtnSet = ()=> {

    return (
        <div className={s.btn_container}>
            <button className={clsx(s.button, s.lang)} type="button">
            <Lang 
            className={clsx(s.icon, s.lang)}
       /></button>
        <a className={clsx(s.button, s.link)} href="https://www.instagram.com/hoodie.driver/" target="_blank" rel="noopener noreferrer">
            <Instagram 
            className={s.icon}/>
            </a>
            <Link href={'/store'} className={clsx(s.button, s.link)}>
                <Shopping className={s.icon}/>
            </Link>
            
        </div>

    )
};

export default BtnSet;