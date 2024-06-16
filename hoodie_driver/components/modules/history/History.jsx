import s from './history.module.scss';
import MainButton from '@/components/elements/mainButton/Main_Button';
import MainContainer from '@/components/layouts/MainCintainer';

import Slider from './slider/Slider';



const slide ={url: '/story_image.webp', alt: 'story image'};

const slides_list = new Array(6).fill(slide);

const History =()=> {
    return (
        <section className={s.container}>
            <MainContainer>
            <article className={s.article}>
                <div className={s.text_content}>
                    <h3 className={s.title}>
                    Як починалась наша історія з худі на КПП і як з’явилась назва Hoodie driver
                    </h3>
                    <p className={s.description}>
                    Одного вечора ми з партнером вирішили створити щось унікальне для автомобіля, щось цікаве та водночас щоб викликало Wow-ефект. 
                    <span>
                    Ми спочатку довго думали самі, вигадували чудернацькі ідеї, але вони були приречені на провал…
                    </span>
                    </p>
                    <MainButton title={'Цікаво, читаю далі...'} path={'/about'}/>

                </div>
                <div className={s.slider}>
                    <Slider slides={slides_list}/>
                </div>
            </article>
            </MainContainer>
        </section>
        
    )
};


export default History;

