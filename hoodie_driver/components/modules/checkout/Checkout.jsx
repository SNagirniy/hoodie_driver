'use client'

import s from './checkout.module.scss';
import MainContainer from '@/components/layouts/MainCintainer';
import { useCart } from '@/contexts/cartContext';

import { useState, useRef } from 'react';
import usePromotion from '@/hooks/usePromotion';
import chanels from '@/utils/contactChanels';

import CheckoutClientData from '@/components/elements/checkoutClientData/CheckoutClientData';
import CheckoutContactData from '@/components/elements/checkoutContactData/CheckoutContactData';
import CheckoutDeliveryData from '@/components/elements/checkoutDeliveryData/CheckoutDeliveryData';
import CheckoutPayment from '@/components/elements/checkoutPayment/CheckoutPayment';
import CheckoutMessage from '@/components/elements/checkoutMesage/CheckoutMessage';
import CheckoutCartData from '@/components/elements/checkoutCartData/ChackoutCartData';




const initialClient = {firstname: '', secondname: '', phone: ''}

const Checkout =()=> {
    const {cart, promocode, addPromocode, hydrated, clearCart}=useCart();
   
    const [clientData, setClientData]=useState(initialClient);

    const [chanell, setChanel]= useState(chanels.instagram.title);
    const [contactData, setContactData] = useState('');

    const [cityRef, setCityRef] = useState(null);
    const [deliveryAdress, setDeliveryAdress] = useState(null);
    const [deliveryAbroad, setDeliveryAbroad] = useState('');

    const[paymentType, setPaymentType]= useState('postpaid')
   
    const [message, setMessage]= useState('');

    const formRef = useRef(null);
    const {totalDiscount}= usePromotion(promocode, cart);
    const total = cart?.reduce((acc, el)=>{ const cost = el.price * el.ammount; return acc+cost}, 0);

    if(!hydrated) {return null}; 

    const resetFields=()=>{
        setClientData(initialClient),
        setChanel(chanels.instagram.title),
        setContactData(''),
        setCityRef(null),
        setDeliveryAdress(''),
        setDeliveryAbroad(''),
        setPaymentType('postpaid'),
        setMessage(''),
        clearCart()
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(cart?.lenngth === 0) {return};
       
        const order={

            client: {...clientData,
                [chanell]: contactData,
            },
            delivery: {
                city: cityRef?.label,
                deliveryAdress: deliveryAdress?.label,
                deliveryAbroad,
            },
            payment:{
                paymentType,
                promocode,
                sum: total,
                totalDiscount,
                total: total - totalDiscount
            },
            message,
            cart,

           
        }

        console.log(order)
        resetFields()
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
                    <CheckoutContactData
                    chanell={chanell}
                    contactData={contactData}
                    setChanel={setChanel}
                    setContactData={setContactData}/>

                    <CheckoutDeliveryData
                    deliveryAdress={deliveryAdress}
                    setDeliveryAdress={setDeliveryAdress}
                    cityRef={cityRef}
                    setCityRef={setCityRef}
                    deliveryAbroad={deliveryAbroad}
                    setDeliveryAbroad={setDeliveryAbroad}/>

                    <CheckoutPayment 
                    setPaymentType={setPaymentType}
                    paymentType={paymentType}/>
                    
                    <CheckoutMessage
                    message={message}
                    setMessage={setMessage}/>
                    
                </form>
                </div>

                <div className={s.cart_wrapper}>
                    <CheckoutCartData
                    cart={cart}
                    total={total}
                    promocode={promocode}
                    totalDiscount={totalDiscount}
                    addPromocode={addPromocode}
                    handleButtonClick={handleButtonClick}
                    />
                </div>
                
            </div>
        </MainContainer>
    </section>
)
};


export default Checkout;