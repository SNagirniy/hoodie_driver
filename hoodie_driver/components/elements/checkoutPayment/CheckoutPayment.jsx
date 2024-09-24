'use client'
import s from './checkout_payment.module.scss';
import clsx from 'clsx';
import { useState } from 'react';


const CheckoutPayment = ()=> {
const [isOpen, setIsOpen]=useState(false);

const toggleCardPayment = (e)=> {
const value = e.currentTarget.value;
console.log(value)
setIsOpen(false)

if(value === 'карта'){setIsOpen(true)}
    
}

    return(
  <>
        <div role='radiogroup' className={s.block_wrapper}>
        <label className={clsx(s.label, s.radio_label)}>
        Оплата на пошті після отримання (предплата 100-200грн) Не працює при відправці за кордон!
            <input onChange={toggleCardPayment} value={'післяплата'} className={s.radio_input} type="radio" name='payment'/>
        </label>
        <label className={clsx(s.label, s.radio_label)}>
        Повна оплата
            <input onChange={toggleCardPayment} value={'повна оплата'} className={s.radio_input} type="radio" name='payment'/>
        </label>
        <label className={clsx(s.label, s.radio_label)}>
        Оплата картою
            <input value={'карта'} onChange={toggleCardPayment} className={s.radio_input} type="radio" name='payment'/>
        </label>
        </div>
        <div className={clsx(s.hidden_container, {[s.open]: isOpen})}>
            <div className={clsx(s.input_wrapper, {[s.open]: isOpen})}>
            <p className={s.message}>Нажаль онлайн оплата тимчасово не доступна.</p>
                    <label className={s.label}>
                    Номер карти:
                    <input 
                    disabled 
                    className={s.input} 
                    type="text" 
                    placeholder='XXXX-XXXX-XXXX-XXXX'/>
                    </label>
                    <label className={s.label}>
                    Термін дії:
                    <input 
                    disabled 
                    className={s.input} 
                    type="text" 
                    placeholder='ММ / РР'/>
                    </label>
                    <label className={s.label}>
                    Код CVV:
                    <input 
                    disabled 
                    className={s.input} 
                    type="text" 
                    placeholder='XXX'/>
                    </label>
            </div>
        </div>
        </>
   
    )
};

export default CheckoutPayment;

