'use client'

import s from './checkout.module.scss';
import MainContainer from '@/components/layouts/MainCintainer';
import { useCart } from '@/contexts/cartContext';

import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import usePromotion from '@/hooks/usePromotion';

import CheckoutClientData from '@/components/elements/checkoutClientData/CheckoutClientData';
import CheckoutContactData from '@/components/elements/checkoutContactData/CheckoutContactData';
import CheckoutDeliveryData from '@/components/elements/checkoutDeliveryData/CheckoutDeliveryData';
import CheckoutPayment from '@/components/elements/checkoutPayment/CheckoutPayment';
import CheckoutMessage from '@/components/elements/checkoutMesage/CheckoutMessage';
import CheckoutCartData from '@/components/elements/checkoutCartData/ChackoutCartData';




const initialClient = {firstname: '', secondname: '', phone: ''}

const Checkout =()=> {
    const {cart, promocode, addPromocode, changeDiscountValue, hydrated}=useCart();
    const [city, setCity] = useState('');
    const [clientData, setClientData]=useState(initialClient);
    const [deliveryAdress, setDeliveryAdress] = useState(null);

    const formRef = useRef(null);

    const {totalDiscount}= usePromotion(promocode, cart);

    const total = cart?.reduce((acc, el)=>{ const cost = el.price * el.ammount; return acc+cost}, 0);

    if(!hydrated) {return null}; 


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Форма відправлена');
      };
    
      const handleButtonClick = (e) => {
        if (formRef.current) {
          formRef.current.requestSubmit(); 
        }
      };
return(
    <section className={s.container}>
        <MainContainer>
            
            <div className={s.wrapper}>
                <div className={s.form_wrapper}>
                <h2 className={s.title}>Оформлення замовлення</h2>
                <form ref={formRef} onSubmit={handleSubmit} className={s.form}>

                    <CheckoutClientData
                    setClientData={setClientData}
                    clientData={clientData}
                    />
                    <CheckoutContactData/>

                    <CheckoutDeliveryData
                    deliveryAdress={deliveryAdress}
                    setDeliveryAdress={setDeliveryAdress}
                    city={city}
                    setCity={setCity}/>

                    <CheckoutPayment/>
                    
                    <CheckoutMessage/>
                    
                </form>
                </div>

                <div className={s.cart_wrapper}>
                    <CheckoutCartData
                    cart={cart}
                    total={total}
                    promoValue={promocode?.code || ''}
                    totalDiscount={totalDiscount}
                    handleChangePromo={()=> null}
                    handleButtonClick={handleButtonClick}
                    />
                </div>
                
            </div>
        </MainContainer>
    </section>
)
};


export default Checkout;