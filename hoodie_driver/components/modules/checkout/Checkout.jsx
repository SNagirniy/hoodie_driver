'use client'

import s from './checkout.module.scss';
import MainContainer from '@/components/layouts/MainCintainer';
import { useCart } from '@/contexts/cartContext';

const Checkout =()=> {
    const {cart, discountValue}=useCart();

    const total = cart.reduce((acc, el)=>{ const cost = el.price * el.ammount; return acc+cost}, 0);
    
return(
    <section className={s.container}>
        <MainContainer>
            <h2>Деталі замовлення</h2>

            <ul>
                {cart?.map((item)=>{
                 return( <li key={item?.id}>
                        <p>{item?.title}</p>
                        <p>Кількість: {item?.ammount}</p>
                        <p>Ціна: {item?.price}</p>
                        <p>Вартість: {item?.price * item?.ammount}</p>
                    </li>)
                })}
            </ul>

            <p>Загальна вартість: {total}грн</p>
            <p>Знижка: {discountValue}грн</p>
            <p>Усього: {total-discountValue}грн</p>

        </MainContainer>
    </section>
)
};


export default Checkout;