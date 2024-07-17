import s from './revievs.module.scss';
import MainContainer from '@/components/layouts/MainCintainer';
import Slider from './gallery/Slider';
import { getColors } from '@/app/lib/firebase/productapi';



const slide ={url: '/review_image.png', alt: 'customer review'};

const slides_list = new Array(8).fill(slide);




const Reviews = async ({title, description, children, fetchFunc})=>{

    let list = []
    let color_map=[]


    if(fetchFunc) {
        list = await fetchFunc('jewerly_for_hoodie');
        color_map = await getColors()
    } else {list = slides_list}


    return(

        <section className={s.section}>
            <MainContainer>
                <div className={s.head_container}>
                    <hgroup className={s.head}> 
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </hgroup>

                {children}
                </div>
            </MainContainer>
         <Slider colors={color_map} slides={list}/>
        </section>
    )
};

export default Reviews;