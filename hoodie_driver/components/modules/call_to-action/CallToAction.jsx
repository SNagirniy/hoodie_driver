import s from './call_to_action.module.scss';
import { useTranslations } from 'next-intl';

import MainContainer from '@/components/layouts/MainCintainer';
import MainButton from '@/components/elements/mainButton/Main_Button';
import Instagram from '../../../public/Instagram.svg';

const CallToAction = ()=> {
    const t = useTranslations("Home")

    return (
        <section className={s.section}>
        <MainContainer>
        <article className={s.article}>
        <div className={s.container}>
            <h2 className={s.title}>{t("CTA.title")}</h2>
            <p className={s.description}>{t("CTA.descr")}</p>
            <MainButton target={'_blank'} title={t("CTA.btn_title")} path={'https://www.instagram.com/hoodie.driver/'}>
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