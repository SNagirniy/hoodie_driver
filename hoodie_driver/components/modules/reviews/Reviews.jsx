import s from './revievs.module.scss';
import MainContainer from '@/components/layouts/MainCintainer';
import MainButton from '@/components/elements/mainButton/Main_Button';
import InstagramIcon from '../../../public/Instagram.svg';
import Slider from './gallery/Slider';
import { useTranslations } from 'next-intl';


const slide ={url: '/review_image.png', alt: 'customer review'};

const slides_list = new Array(8).fill(slide);




const Reviews = ()=>{

    const t = useTranslations('Home');


    return(

        <section className={s.section}>
            <MainContainer>
                <div className={s.head_container}>
                    <hgroup className={s.head}> 
                        <h2>{t('Reviews.title')}</h2>
                        <p>{t('Reviews.descr')}</p>
                    </hgroup>

                    <MainButton target={'_blank'} title={`200+ в ${t('Reviews.btn_title')}`} path={'https://www.instagram.com/hoodie.driver/'}>
                        <InstagramIcon className={s.icon}/>
                    </MainButton>
                </div>
            </MainContainer>
         <Slider slides={slides_list}/>
            
        </section>
    )
};

export default Reviews;