'use client'
import MainContainer from '@/components/layouts/MainCintainer';
import MainButton from '@/components/elements/mainButton/Main_Button';
import s from './order_detail_article.module.scss';


const OrderDetailArticle = ({order_id})=> {

    return(
        <section className={s.section}>
            <MainContainer>
                <article className={s.article}>
               <p>Ваше замовлення <span className={s.order_id}>№{order_id}</span> успішно оформлено!<br/>
               Дякуємо за вибір! Наш менеджер скоро зв’яжеться з вами для уточнення деталей. </p> 

               <MainButton title={'На головну'} path={'/'}/>
                </article>
            </MainContainer>
        </section>
    )

}

export default OrderDetailArticle;