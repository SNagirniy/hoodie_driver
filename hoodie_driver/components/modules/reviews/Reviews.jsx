import s from './revievs.module.scss';
import MainContainer from '@/components/layouts/MainCintainer';
import MainButton from '@/components/elements/mainButton/Main_Button';
import InstagramIcon from '../../../public/Instagram.svg';
import Slider from './gallery/Slider';


const slide ={url: '/review_image.png', alt: 'customer review'};

const slides_list = new Array(8).fill(slide);




const Reviews = ()=>{


    return(

        <section className={s.section}>
            <MainContainer>
                <div className={s.head_container}>
                    <hgroup className={s.head}> 
                        <h2>Відгуки покупців</h2>
                        <p>Ми пишаємося, що маємо більше 200 задоволених відгуків від наших клієнтів в Інстаграм!</p>
                    </hgroup>

                    <MainButton title={'200+ в Інстаграм'} path={'https://www.instagram.com/hoodie.driver/'}>
                        <InstagramIcon className={s.icon}/>
                    </MainButton>
                </div>
            </MainContainer>
         <Slider slides={slides_list}/>
            
        </section>
    )
};

export default Reviews;