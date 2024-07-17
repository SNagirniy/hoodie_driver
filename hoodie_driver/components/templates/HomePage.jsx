import Hero from "../modules/hero/Hero";
import Bestselers from "../modules/bestselers/Bestselers";
import Custom from "../modules/custom/Custom";
import Reviews from "../modules/reviews/Reviews";
import Features from "../modules/features/Features";
import History from "../modules/history/History";
import CallToAction from "../modules/call_to-action/CallToAction";
import Questions from "../modules/questions/Questions";
import MainButton from "../elements/mainButton/Main_Button";
import InstagramIcon from '../../public/Instagram.svg';

import { useTranslations } from 'next-intl';

const HomePage =()=> {
    const t = useTranslations('Home');
    return (
        <>
        <Hero/>
        <Bestselers/>
        <Custom/>
        <Reviews description={t('Reviews.descr')} title={t('Reviews.title')}>
            <MainButton target={'_blank'} title={`200+ в ${t('Reviews.btn_title')}`} 
            path={'https://www.instagram.com/hoodie.driver/'}>
                        <InstagramIcon width={24} height={24} fill={'white'}/>
            </MainButton>
        </Reviews>
        <Features/>
        <History/>
        <CallToAction/>
        <Questions/>
        </>
    )
};

export default HomePage;