
import s from './cart_button.module.scss';
import Shopping from '../../../../public/shopping.svg';



const CartButton=({children, toggleModal})=>{


    return (
        <button onClick={toggleModal}  className={s.cart_btn} type="button">
            <Shopping className={s.icon}/>
              {children}
        </button>
    )
};


export default CartButton;