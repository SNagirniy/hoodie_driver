
import s from './navigation.module.scss';
import clsx from "clsx";
import LocalesSwitcger from './locales/LocalesSwitcger';
 import Instagram from '../../../public/Instagram.svg';
import CartButton from './CartButton/CartButton';





const BtnSet = ()=> {

    return (
        <div className={s.btn_container}>
            <LocalesSwitcger/>
        <a className={clsx(s.button, s.link)} href="https://www.instagram.com/hoodie.driver/" target="_blank" rel="noopener noreferrer">
            <Instagram 
            className={clsx(s.icon, s.instagram)}/>
            </a>
           <CartButton/>
            
        </div>

    )
};

export default BtnSet;