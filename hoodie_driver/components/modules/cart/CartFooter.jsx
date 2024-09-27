'use client'
import s from './cart.module.scss';
import PromoButton from '@/components/elements/promoButton/PromoButton';

const CartFooter=({total,promocode, addPromocode, totalDiscount})=> {
    return(
        <div className={s.cart_footer}>

        <p className={s.total}>Сума:</p> 
        <span className={s.value}>{total}грн</span>

        <PromoButton 
        promocode={promocode}
        addPromocode={addPromocode}
        />
         <span className={s.value}>{totalDiscount>0?  `-${totalDiscount}грн` : null}</span>
  
         <p className={s.total}>Сума до сплати:</p> 
        <span className={s.value}>{total-totalDiscount}грн</span>
        
      </div>
    )
};


export default CartFooter;