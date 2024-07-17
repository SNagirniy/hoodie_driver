
import s from './navigation.module.scss';
import clsx from "clsx";
import LocalesSwitcger from './locales/LocalesSwitcger';
import Instagram from '../../../public/Instagram.svg';
import CartButton from './CartButton/CartButton';
import CartIndicator from './CartButton/CartIndicator';





const BtnSet = ()=> {

    return (
    <div className={s.btn_container}>
        <LocalesSwitcger/>
        <a className={s.button} href="https://www.instagram.com/hoodie.driver/" target="_blank"      rel="noopener noreferrer">
            <Instagram 
            className={s.icon}/>
        </a>
        <CartButton>
            <CartIndicator/>
        </CartButton>
    </div>

    )
};

export default BtnSet;