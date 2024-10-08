'use client'
import s from './cart.module.scss';
import { useCart } from '@/contexts/cartContext';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import { useLocale } from 'next-intl';
import { useEffect } from 'react';
import usePromotion from '@/hooks/usePromotion';
import Button from '@/components/elements/mainButton/Button';
import EmptyCart from '../empty_cart/EmptyCart';
import Gifts from '../gifts/Gifts';
import {useRouter } from '@/navigation';



const Cart = ({closeModal})=> {
const {cart, promocode, addPromocode, changeDiscountValue, gift, addGift}=useCart();
const {totalDiscount}= usePromotion(promocode, cart);
const locale = useLocale();

const router =useRouter();

const total = cart.reduce((acc, el)=>{ const cost = el.price * el.ammount; return acc+cost}, 0);

const relocateTo=(path)=>{
  router.replace(path);
  closeModal();}

  useEffect(()=> changeDiscountValue(totalDiscount?.discount), [totalDiscount]);

if(cart.length === 0 ) {return <EmptyCart relocate={()=>relocateTo('/store')}/>};

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

   <CartFooter
   total={total}
   totalDiscount={totalDiscount?.discount}
   promocode={promocode}
   addPromocode={addPromocode}
   />

    <Gifts
    gifts_options={totalDiscount?.gifts}
    gift={gift}
    addGift={addGift}
    />

    <p className={s.footer_title}>Подарункове пакування до кожного замовлення</p>
    <Button action={()=>relocateTo(`/checkout`)} title={'Оформити замовлення'}/>
    </div>
)
};

export default Cart;

