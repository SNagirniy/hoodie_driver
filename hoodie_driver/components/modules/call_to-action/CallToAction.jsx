import s from './call_to_action.module.scss';
import MainContainer from '@/components/layouts/MainCintainer';
import MainButton from '@/components/elements/mainButton/Main_Button';
import Instagram from '../../../public/Instagram.svg';

const CallToAction = ()=> {
    return (
        <section className={s.section}>
        <MainContainer>
        <div className={s.container}>
        <div className={s.article}>
            <h2 className={s.title}>Підпишись на нас в Інстаграм</h2>
            <p className={s.description}>Відповідаємо  на запитання майже 24/7, консультуємо  та допомагаємо з дизайнами.  А  також публікуємо акції, розіграші та  новинки</p>
            <MainButton title={'Долучайся до нас в Instagram '} path={'https://www.instagram.com/hoodie.driver/'}>
                <Instagram className={s.icon}/>
            </MainButton>
        </div>
       
            <div className={s.thumb}>
                <img className={s.image} src='/smartphone.png' alt="Instagram page image" />
            </div>
        
        </div>

        </MainContainer>
        
        </section>
    )
};


export default CallToAction;