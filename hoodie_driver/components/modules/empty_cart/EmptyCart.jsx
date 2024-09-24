'use client'
import s from './empty_cart.module.scss';
import Button from '@/components/elements/mainButton/Button';
import Empty_Cart from '../../../public/empty_cart.svg';


const EmptyCart = ({relocate})=> {


    return(
        <div className={s.container}>
                <h2 className={s.title}>Кошик пустий</h2>
                <Empty_Cart className={s.icon}/>
                <Button action={relocate} title={'Продовжити покупки'}/>
        </div>
    )
};



export default EmptyCart;