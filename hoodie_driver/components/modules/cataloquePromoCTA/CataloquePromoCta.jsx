

import s from './cataloque_promo_cta.module.scss';





const CataloquePromoCta = ()=>{

    return (
        <section className={s.section}>
            <article>
            <h2 className={s.title}>Купуй 2 худі на КПП та отримай третє в подарунок!</h2>
            <p className={s.description}>Додай промокод “PRESENT3”  при оформленні замовлення, та за  кожні 2 худі в кошику отримай третє у подарунок</p>
            </article>
        </section>
    )
};


export default CataloquePromoCta;