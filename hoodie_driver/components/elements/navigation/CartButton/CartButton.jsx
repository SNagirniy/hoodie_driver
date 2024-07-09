'use client'
import s from './cart_button.module.scss';
import Shopping from '../../../../public/shopping.svg';
import { useCart } from '@/contexts/cartContext';
import { useState,useEffect } from 'react';


const CartButton=()=>{
    const [hydrated, setHydrated] = useState(false);
    const { cart } = useCart(); 
    useEffect(() => {
        setHydrated(true);
      }, []);
    
      if (!hydrated) {
        return ( <button  className={s.cart_btn} type="button">
        <Shopping className={s.icon}/>
                </button>)
      }

    return (
        <button  className={s.cart_btn} type="button">
            <Shopping className={s.icon}/>
          { cart?.length > 0 && <span className={s.cart_indicator}>{cart?.length}</span>}
        </button>
    )
};


export default CartButton;