'use client'
import s from './cart.module.scss';

const CartFooter=({total, promoValue, handleChangePromo, totalDiscount})=> {
    return(
        <div className={s.cart_footer}>

        <p className={s.total}>Сума:</p> 
        <span className={s.value}>{total}грн</span>
  
        <label className={s.total}>Promocode:
          <input 
          onChange={handleChangePromo}
          value={promoValue} 
          className={s.promo} 
          type='text'/>
         </label> 
         <span className={s.value}>-{totalDiscount}грн</span>
  
         <p className={s.total}>Сума до сплати:</p> 
        <span className={s.value}>{total-totalDiscount}грн</span>
      </div>
    )
};


export default CartFooter;