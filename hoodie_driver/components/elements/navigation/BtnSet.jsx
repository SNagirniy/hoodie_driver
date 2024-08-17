
import s from './navigation.module.scss';
import LocalesSwitcger from './locales/LocalesSwitcger';
import Instagram from '../../../public/Instagram.svg';
import CartButton from './CartButton/CartButton';
import CartIndicator from './CartButton/CartIndicator';





const BtnSet = ({toggleModal})=> {

    return (
    <div className={s.btn_container}>
        <div className={s.desktop_wrapper}><LocalesSwitcger/></div>
        
        <a className={s.button} href="https://www.instagram.com/hoodie.driver/" target="_blank"      rel="noopener noreferrer">
            <Instagram 
            className={s.icon}/>
        </a>
        <CartButton toggleModal={toggleModal}>
            <CartIndicator/>
        </CartButton>
    </div>

    )
};

export default BtnSet;