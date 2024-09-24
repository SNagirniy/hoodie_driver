'use client'
import s from './cart.module.scss';
import AmmountInput from "@/components/elements/ammountInput/AmmountInput";
import { useCart } from "@/contexts/cartContext";
import Trash from '../../../public/trash.svg';

const CartItem = ({ammount, id, image, title, price})=>{
    const {removeFromCart, changeCartItem} = useCart();

const deleteProduct = (e)=> {
    const id = e.currentTarget?.value;
    removeFromCart(id)
};

    const changeAmmount =(e)=>{
        const name = e.currentTarget.name;
        if (name === 'decrement' && ammount > 1) {
        const new_ammount =  ammount - 1
        changeCartItem(id, {ammount: new_ammount})
        } else if( name === 'increment' && ammount < 100) {
        const new_ammount =  ammount + 1
        changeCartItem(id, {ammount: new_ammount})}};
   
        return ( 
            <li className={s.cart_item}
            key={id}> 
            <div className={s.prod_details}>
           
                <div className={s.thumb}><img src={image} alt={title} /></div>
                
                <div className={s.btn_set}>
                    <AmmountInput handleChange={changeAmmount} ammount={ammount}/>
                     <button
                    value={id}
                    onClick={deleteProduct}
                    className={s.delete_btn}>
                    <Trash className={s.delete_icon}/>
                    </button>
                </div>
                    <div className={s.price_box}>
                    <p>{title}</p>
                    <p className={s.price}>{price}грн</p>
                    </div>
                    
                </div>
            
            </li> )
};

export default CartItem;