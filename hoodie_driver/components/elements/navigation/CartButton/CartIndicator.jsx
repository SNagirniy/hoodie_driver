'use client'
import { useCart } from '@/contexts/cartContext';
import s from './cart_button.module.scss'

const CartIndicator = ()=> {
    const { cart, hydrated } = useCart(); 
    if(!hydrated || cart.length <= 0){return null}

    return <span className={s.cart_indicator}>{cart?.length}</span>
};


export default CartIndicator