'use client'
import s from './checkout_payment.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import Check from '../../../public/check_icon.svg';


const paymentTypes =[{
    type: 'postpaid',
    label: 'Оплата на пошті після отримання (предплата 100-200грн). Не працює при відправці за кордон!'
},
{
    type: 'full_payment',
    label: 'Повна оплата'
},
{
    type: 'card_payment',
    label: 'Оплата картою'
}]

const CheckoutPayment = ({setPaymentType, paymentType})=> {
const [isOpen, setIsOpen]=useState(false);

const toggleCardPayment = (e)=> {
const value = e.currentTarget.value;
setIsOpen(false)
setPaymentType(value);

if(value === 'card_payment'){setIsOpen(true)}
    
}

    return(
  <>
        <div role='radiogroup' className={s.block_wrapper}>

            {paymentTypes.map(({type, label})=> {
                return(
                    <label key={type} className={clsx(s.label, s.radio_label)}>{label}
                        <input checked={type === paymentType} onChange={toggleCardPayment} value={type} className={s.radio_input} type="radio" name='payment'/>
                        <span><Check className={s.icon} /></span>
                    </label>
                )
            })}
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

