
import s from './bestselers.module.scss';
import Card from '@/components/elements/card/Card';
import MainButton from '@/components/elements/mainButton/Main_Button';
import MainContainer from '@/components/layouts/MainCintainer';
import { getBestselers, getColors } from '@/app/lib/firebase/productapi';






const Bestselers = async()=>{
const color_map = await getColors()
const products = await getBestselers();






    return(
        
        <section >
            <MainContainer>
                <div className={s.section}>
            <hgroup className={s.head}> <h2 className={s.title}>Наші бестселлери</h2>
            <p className={s.sub_title}>Худі на КПП та аксесуари, які ви купуєте найчастіше</p>
            </hgroup>
            <ul className={s.card_list}>
                {products?.map(({id, title, price, available_colors, imageURL})=> {return <li key={id}><Card slug={id} titles={title} price={price} available_colors={available_colors} url = {imageURL} color_map={color_map}/></li>})}
            </ul>
            <MainButton path={'/store/hoodie'} title={'Хочу побачити всі'}/>
            </div>
            </MainContainer>
            
        </section>
    )
};

export default Bestselers;
