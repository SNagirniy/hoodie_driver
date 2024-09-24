'use client'

import s from './checkout_cart_data.module.scss';
import CartItem from '@/components/modules/cart/CartItem';
import CartFooter from '@/components/modules/cart/CartFooter';
import Button from '../mainButton/Button';
import EmptyCart from '@/components/modules/empty_cart/EmptyCart';
import { useRouter } from '@/navigation';

const CheckoutCartData = ({cart,total, promoValue, totalDiscount, handleChangePromo, handleButtonClick})=> {
    
    const router =useRouter();
    const relocateTo=(path)=>{ router.replace(path);}

    if(cart.length === 0 ) {return <EmptyCart relocate={()=>relocateTo('/store')}/>};

return(
    <div className={s.container}>
    <ul className={s.list}>
        { cart?.map(({id, title, image, ammount, price})=> { 
            return <CartItem 
            key={id}
            ammount={ammount} 
            id={id} 
            image={image} 
            title={title} 
            price={price}/>
   })}
    </ul>

   <CartFooter
   total={total}
   promoValue={promoValue}
   totalDiscount={totalDiscount}
   handleChangePromo={handleChangePromo}
   />
   <p className={s.footer_title}>Подарункове пакування до кожного замовлення</p>
   <Button type='button' action={handleButtonClick} title={'Оформити замовлення'}/>
    </div>
)
}

export default CheckoutCartData;