'use client'
import s from './cart.module.scss';
import { useCart } from '@/contexts/cartContext';
import CartItem from './CartItem';
import { useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { toast } from 'react-toastify';
import usePromotion from '@/hooks/usePromotion';


const Cart = ()=> {
const {cart, promocode, addPromocode}=useCart();
const [promoValue, setPromoValue]= useState(promocode?.code || '');
const {totalValue, totalDiscount}= usePromotion(promocode, cart);
const locale = useLocale();


const total = cart.reduce((acc, el)=>{ const cost = el.price * el.ammount; return acc+cost}, 0);


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

if(cart.length === 0 ) {return (<div className={s.empty}>Cart is empty</div>)};

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
    <div className={s.cart_footer}>
        
    <label className={s.total}>Promocode:
        <input 
        onChange={handleChangePromo}
        value={promoValue} 
        className={s.promo} 
        type='text'/>
    </label>
    <p className={s.total}>Total: {total-totalDiscount}грн</p>
    </div>
    </div>
)
};

export default Cart;