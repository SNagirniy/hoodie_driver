import s from './call_to_action.module.scss';
import MainContainer from '@/components/layouts/MainCintainer';
import MainButton from '@/components/elements/mainButton/Main_Button';
import Instagram from '../../../public/Instagram.svg';

const CallToAction = ()=> {
    return (
        <section className={s.section}>
        <MainContainer>
        <article className={s.article}>
        <div className={s.container}>
            <h2 className={s.title}>Підпишись на нас в Інстаграм</h2>
            <p className={s.description}>Відповідаємо  на запитання майже 24/7, консультуємо  та допомагаємо з дизайнами.  А  також публікуємо акції, розіграші та  новинки</p>
            <MainButton target={'_blank'} title={'Долучайся до нас'} path={'https://www.instagram.com/hoodie.driver/'}>
                <Instagram className={s.icon}/>
            </MainButton>
        </div>
       
            <div className={s.thumb}>
                <img className={s.image} src='/smartphone.webp' alt="Instagram page image" />
            </div>
        
        </article>

        </MainContainer>
        
        </section>
    )
};


export default CallToAction;