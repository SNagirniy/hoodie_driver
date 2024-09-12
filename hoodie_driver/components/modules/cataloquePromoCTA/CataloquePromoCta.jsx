'use client'
import { useCart } from '@/contexts/cartContext';
import s from './cataloque_promo_cta.module.scss';
import Button from '@/components/elements/mainButton/Button';
import { toast } from 'react-toastify';



const CataloquePromoCta = ({promocode})=>{


    const {addPromocode} = useCart();

    const handleClick = ()=> {
        addPromocode(promocode)
        promocode && toast.success('Промокод активовано!')
    }
    return (
        <section className={s.section}>
            <article>
            <h2 className={s.title}>Купуй 2 худі на КПП та отримай третє в подарунок!</h2>
            <p className={s.description}>Додай промокод “PRESENT3”  при оформленні замовлення, та за  кожні 2 худі в кошику отримай третє у подарунок</p>
            <Button action={handleClick} title={'Лови свій промокод!'}/>
            </article>
        </section>
    )
};


export default CataloquePromoCta;