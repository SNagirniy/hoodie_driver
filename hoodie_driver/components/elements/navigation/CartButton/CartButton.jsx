
import s from './cart_button.module.scss';
import Shopping from '../../../../public/shopping.svg';




const CartButton=({children})=>{

    return (
        <button  className={s.cart_btn} type="button">
            <Shopping className={s.icon}/>
              {children}
        </button>
    )
};


export default CartButton;