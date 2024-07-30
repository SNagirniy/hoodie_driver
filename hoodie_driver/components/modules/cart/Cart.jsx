'use client'
import s from './cart.module.scss';
import { useCart } from '@/contexts/cartContext';
import CartItem from './CartItem';
import { useLocale } from 'next-intl';

const Cart = ()=> {
const {cart}=useCart();
const locale = useLocale();

if(cart.length === 0 ) {return (<div className={s.empty}>Cart is empty</div>)};


const total = cart.reduce((acc, el)=>{ const cost = el.price * el.ammount; return acc+cost}, 0);


return (
    <div className={s.container}>
    <ul className={s.list}>
        { cart?.map(({id, title, image, ammount, price})=> { 
            return <CartItem 
            key={id}
            ammount={ammount} 
            id={id} 
            image={image} 
            title={title[locale]} 
            price={price}/>
   })}
    </ul>
    <p className={s.total}>Total: {total}грн</p>
    </div>
)
};

export default Cart;