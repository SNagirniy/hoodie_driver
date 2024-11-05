'use client'
import s from './promo_button.module.scss';
import Trash from '../../../public/trash.svg';
import Check from '../../../public/check_icon.svg';
import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { toast } from 'react-toastify';

const PromoButton = ({ promocode, addPromocode})=> {
const [isOpen, setIsOpen]=useState(false);
const [promoValue, setPromoValue]= useState(promocode?.code || '');

const handleRotate=()=>{
    setIsOpen(!isOpen)
};

const removePromotion = ()=> {
    if( promocode?.code === 0 || promoValue.length === 0){return}
    addPromocode(null);
    setPromoValue('');
    toast.info('Промокод видалений.')
}

const handleChangePromo =(e)=> {
    const value = e.currentTarget?.value;
        setPromoValue(value)
       };

       const onCheckPromotion = async()=> {
        await checkPromotion(promoValue)
       }

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
          if(!result.ok) { toast.info(result?.message),addPromocode(null);
            setPromoValue('');return}
          if (result.ok) {

            addPromocode(result?.promotion)
            toast.success('Промокод активовано')
      
          }} catch (error) {
           console.log(error)
          } 
        
      };

useEffect(()=>{if(promoValue?.length>0){setIsOpen(true)}}, [promoValue]);




    return(
        <div className={clsx(s.container, {[s.open]: isOpen})}>
            <button onClick={handleRotate} className={s.title_btn} type='button'>Я маю промокод</button>
            <div className={s.input_wrapper}>
                <input 
                className={s.input} 
                type="text" 
                onChange={handleChangePromo}
                value={promoValue} />
                <button onClick={onCheckPromotion} className={clsx(s.btn, s.check)}>
                    <Check className={clsx(s.icon, s.check)}/>
                </button>
                <button onClick={removePromotion} className={s.btn}>
                    <Trash className={s.icon}/>
                </button>
            </div>
        </div>
    )

};

export default PromoButton;