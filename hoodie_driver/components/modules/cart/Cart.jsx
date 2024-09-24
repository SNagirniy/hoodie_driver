'use client'
import s from './cart.module.scss';
import { useCart } from '@/contexts/cartContext';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import { useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { toast } from 'react-toastify';
import usePromotion from '@/hooks/usePromotion';
import Button from '@/components/elements/mainButton/Button';
import EmptyCart from '../empty_cart/EmptyCart';
import {useRouter } from '@/navigation';



const Cart = ({closeModal})=> {
const {cart, promocode, addPromocode, changeDiscountValue}=useCart();
const [promoValue, setPromoValue]= useState(promocode?.code || '');
const {totalValue, totalDiscount}= usePromotion(promocode, cart);
const locale = useLocale();

const router =useRouter();

const total = cart.reduce((acc, el)=>{ const cost = el.price * el.ammount; return acc+cost}, 0);


const relocateTo=(path)=>{

  router.replace(path);
  closeModal();

}

const handleChangePromo = async(e)=> {
const value = e.currentTarget?.value;
if(value !==''){
    setPromoValue(value)
   }};


const checkPromotion = async(promo)=>{
  if( promo.length === 0){return}
  try {
    const res = await fetch('/lib/getPromocode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({promocode: promo}),
      });
      const result = await res.json();
    if(!result.ok) { toast.info(result?.message);return}
    if (result.ok) {
      addPromocode(result?.promotion[0])
      toast.success('Промокод активовано')

    }} catch (error) {
     console.log(error)
    } 
  
};
const debaunced = useDebouncedCallback(checkPromotion, 1000)

useEffect(()=>{debaunced(promoValue)},[promoValue]);
useEffect(()=> changeDiscountValue(totalDiscount), [totalDiscount]);

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
            title={title} 
            price={price}/>
   })}
    </ul>

   <CartFooter
   total={total}
   promoValue={promoValue}
   totalDiscount={totalDiscount}
   handleChangePromo={handleChangePromo}
   />
    <p className={s.footer_title}>Подарункове пакування до кожного замовлення</p>
    <Button action={()=>relocateTo(`/checkout`)} title={'Оформити замовлення'}/>
    </div>
)
};

export default Cart;

