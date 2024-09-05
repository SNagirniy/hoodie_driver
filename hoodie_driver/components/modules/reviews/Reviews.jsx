import s from './revievs.module.scss';
import MainContainer from '@/components/layouts/MainCintainer';
import Slider from './gallery/Slider';
import { getColors } from '@/app/lib/firebase/productapi';
import { getReviewsImages } from '@/app/lib/firebase/customImageApi';
import clsx from 'clsx';



const Reviews = async ({title, description, children, fetchFunc})=>{

    let list = []
    let color_map=[]


    if(fetchFunc) {
        list = await fetchFunc('jewerly_for_hoodie');
        color_map = await getColors()
    } else {list = await getReviewsImages()}

    return(

        <section className={s.section}>
            <MainContainer>
                <div className={clsx(s.head_container, {[s.accesories]: fetchFunc})}>
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