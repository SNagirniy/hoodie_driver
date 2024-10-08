'use client'

import s from './checkout_cart_data.module.scss';
import CartItem from '@/components/modules/cart/CartItem';
import CartFooter from '@/components/modules/cart/CartFooter';
import Button from '../mainButton/Button';
import EmptyCart from '@/components/modules/empty_cart/EmptyCart';
import { useRouter } from '@/navigation';
import { useLocale } from 'next-intl';
import Gifts from '@/components/modules/gifts/Gifts';

const CheckoutCartData = ({cart,total, promocode, totalDiscount, addPromocode, handleButtonClick, gift, addGift})=> {
    
    const locale = useLocale();
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
            title={title[locale]} 
            price={price}/>
   })}
    </ul>

   <CartFooter
   total={total}
    promocode={promocode}
   totalDiscount={totalDiscount?.discount}
   addPromocode={addPromocode}
   />
   <Gifts
   gift={gift}
   addGift={addGift}
   gifts_options={totalDiscount?.gifts}
   />
   <p className={s.footer_title}>Подарункове пакування до кожного замовлення</p>
   <Button type='button' action={handleButtonClick} title={'Оформити замовлення'}/>
    </div>
)
}

export default CheckoutCartData;