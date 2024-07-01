import s from './custom.module.scss';
import MainButton from '@/components/elements/mainButton/Main_Button';
import MainContainer from '@/components/layouts/MainCintainer';
import Shopping from '../../../public/shopping.svg';
import Fire from '../../../public/fire_icon.svg';
import EmblaCarousel from '../embla/Embla_slider';
import { v4 } from 'uuid';
import { useTranslations } from 'next-intl';






const features = ['color',"design",
    'lace','print','size'];

 const slide ={url: '/carousel.webp', alt: 'custom hoodie'};
 const slides_list = new Array(8).fill(slide);
const direction = {direction: 'rtl'}


const Custom = ()=>{
const t = useTranslations("Home");
  


return (
<section className={s.container}>
    <MainContainer>
    <div className={s.custom_box}>
        <div className={s.thumb} >
            <img className={s.image} src='/custom_image.webp' alt='custom hoodie'/>
           
        </div>
        <div className={s.content}>
            <p className={s.subtitle}><Fire className={s.icon}/>{t("Custom.descr")}</p>
            <h2 className={s.title}>{t("Custom.title")}</h2>
            <ul className={s.list}>
                {features.map(f => <li key={v4()} className={s.item}><p>{t.rich(`Custom.Features.${f}`, {strong: (chunk)=> <strong className={s.acsent_text}>{chunk}</strong>})}</p></li> )}
            </ul>

            <div className={s.btn_group} >
               
            <span> <Shopping className={s.icon}/> 470 грн</span>
           
            <MainButton path={'/store'} title={t("Custom.btn_title")}/> 
            </div>
        </div>
    </div>
    </MainContainer>

   
    <div className={s.gallery}>
        <EmblaCarousel  slides={slides_list}/>
        <EmblaCarousel direction={direction} slides={slides_list}/>
    </div>

</section>
)
};




export default Custom;