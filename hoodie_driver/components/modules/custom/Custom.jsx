import s from './custom.module.scss';
import MainButton from '@/components/elements/mainButton/Main_Button';
import MainContainer from '@/components/layouts/MainCintainer';
import Shopping from '../../../public/shopping.svg';
import Fire from '../../../public/fire_icon.svg';
import EmblaCarousel from '../embla/Embla_slider';
import { v4 } from 'uuid';






const features = [['Будь-який', 'КОЛІР'],['Будь-який', 'ДИЗАЙН'],
 ['Будь-який','ШНУРОК'],['Великий вибір', 'ПРИНТІВ'],['Ідеальний', 'РОЗМІР']];

 const slide ={url: '/carousel.webp', alt: 'custom hoodie'};

 const slides_list = new Array(8).fill(slide);


const direction = {direction: 'rtl'}


const Custom = ()=>{

  


return (
<section className={s.container}>
    <MainContainer>
    <div className={s.custom_box}>
        <div className={s.thumb} >
            <img className={s.image} src='/custom_image.webp' alt='custom hoodie'/>
           
        </div>
        <div className={s.content}>
            <p className={s.subtitle}><Fire className={s.icon}/>Кастом</p>
            <h2 className={s.title}>Створи свій унікальний дизайн</h2>
            <ul className={s.list}>
                {features.map(f => <li key={v4()} className={s.item}><p>{f[0]} <strong className={s.acsent_text}>{f[1]}</strong></p></li> )}
            </ul>

            <div className={s.btn_group} >
               
            <span> <Shopping className={s.icon}/> 470 грн</span>
           
            <MainButton path={'/store'} title={'Замовити персональний'}/> 
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