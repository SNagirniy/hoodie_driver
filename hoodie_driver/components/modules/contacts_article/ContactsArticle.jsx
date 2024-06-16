import s from './contacts_article.module.scss';
import MainContainer from '@/components/layouts/MainCintainer';
import NovaPost from '../../../public/novapost.svg';


const ContactsArticle = ()=> {

    return(
        <section className={s.container}>
            <MainContainer>
                <article className={s.article}>
                <div className={s.text_content}>
                    <h3 className={s.title}>
                    Контакти
                    </h3>
                    <p className={s.description}>
                        <span>Наразі наш склад знаходиться у Львові.</span>
                        Нажаль, поки ми не маємо можливості організувати самовивіз, проте кожного дня робимо відправки <strong>Новою Поштою</strong> в будь-який куточок України, а також <strong>міжнародними перевізниками закордон</strong>.
                    </p>
                    <NovaPost className={s.icon}/>
                </div>
                <div className={s.thumb}>
                    <img  className={s.image} src='/story_image.webp' alt='story image'/>
                </div>
                </article>

            </MainContainer>
        </section>
    )
};



export default ContactsArticle;