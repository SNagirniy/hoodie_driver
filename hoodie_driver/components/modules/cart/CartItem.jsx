'use client'
import s from './cart.module.scss';
import AmmountInput from "@/components/elements/ammountInput/AmmountInput";
import Button from "@/components/elements/mainButton/Button";
import { useCart } from "@/contexts/cartContext";

const CartItem = ({ammount, id, image, title, price})=>{
    const {removeFromCart, changeCartItem} = useCart();

    const cost = (price, ammount)=> price * ammount;


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
            <div className={s.descr}>
            <div className={s.thumb}><img src={image} alt={title} /></div>
            <p>{title}</p>
            </div>
            <p>{price}грн</p>
            <AmmountInput handleChange={changeAmmount} ammount={ammount}/>
            <Button value={id} action={deleteProduct} title={'Видалити'}/>
            </div>
            <p className={s.cost}>{cost(price, ammount)}грн</p>
            
            </li> )
};

export default CartItem;