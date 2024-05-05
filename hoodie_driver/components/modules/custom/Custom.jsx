import s from './custom.module.scss';
import MainButton from '@/components/elements/mainButton/Main_Button';
import Shopping from '../../../public/shopping.svg';
import Fire from '../../../public/fire_icon.svg';



const features = [['Будь-який', 'КОЛІР'],['Будь-який', 'ДИЗАЙН'],
 ['Будь-який','ШНУРОК'],['Великий вибір', 'ПРИНТІВ'],['Ідеальний', 'РОЗМІР']];


const Custom = ()=>{


return (
<section className={s.container}>

    <div className={s.custom_box}>
        <div className={s.thumb} >
            <img className={s.image} src='/custom_image.png' alt='custom hoodie'/>
           
        </div>
        <div className={s.content}>
            <p className={s.subtitle}><Fire className={s.icon}/>Кастом</p>
            <h2 className={s.title}>Створи свій унікальний дизайн</h2>
            <ul className={s.list}>
                {features.map(f => <li className={s.item}><p>{f[0]} <strong className={s.acsent_text}>{f[1]}</strong></p></li> )}
            </ul>

            <div className={s.btn_group} >
               
            <span> <Shopping/> 470 грн</span>
           
            <MainButton path={'./store'} title={'Замовити персональний'}/> 
            </div>

        </div>

    </div>
    <div className={s.gallery}></div>

</section>
)
};




export default Custom;