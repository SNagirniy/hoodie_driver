'use client'
import s from './cart.module.scss';
import { useCart } from '@/contexts/cartContext';
import CartItem from './CartItem';
import { useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { toast } from 'react-toastify';
import usePromotion from '@/hooks/usePromotion';
import Button from '@/components/elements/mainButton/Button';
import {useRouter } from '@/navigation';



const Cart = ({closeModal})=> {
const {cart, promocode, addPromocode, changeDiscountValue}=useCart();
const [promoValue, setPromoValue]= useState(promocode?.code || '');
const {totalValue, totalDiscount}= usePromotion(promocode, cart);
const locale = useLocale();

const router =useRouter();

const total = cart.reduce((acc, el)=>{ const cost = el.price * el.ammount; return acc+cost}, 0);


const relocateToCheckout=()=>{

  router.replace(`/checkout`);
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
        
   <div className={s.footer_box}>
   
   <label className={s.total}>Promocode:
        <input 
        onChange={handleChangePromo}
        value={promoValue} 
        className={s.promo} 
        type='text'/>
    </label>
    <p>{promocode?.description}</p>
   </div>
    <div className={s.footer_box}>
      {totalDiscount> 0 && <p className={s.total}>Discount: {totalDiscount}грн</p>}
       <p className={s.total}>Total: {total-totalDiscount}грн</p>
    </div>
    </div>
        <Button action={relocateToCheckout} title={'Перейти до оформлення'}/>
    </div>
)
};

export default Cart;