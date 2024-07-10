
import s from './bestselers.module.scss';
import Card from '@/components/elements/card/Card';
import MainButton from '@/components/elements/mainButton/Main_Button';
import MainContainer from '@/components/layouts/MainCintainer';
import { getBestselers, getColors } from '@/app/lib/firebase/productapi';
import { getTranslations } from 'next-intl/server';


const Bestselers = async()=>{
const t = await getTranslations("Home");
const color_map = await getColors()
const products = await getBestselers();

    return(
        
        <section >
            <MainContainer>
                <div className={s.section}>
            <hgroup className={s.head}> <h2 className={s.title}>{t(`Bestsellers.title`)}</h2>
            <p className={s.sub_title}>{t(`Bestsellers.descr`)}</p>
            </hgroup>
            <ul className={s.card_list}>
                {products?.map((prod)=> {return <li key={prod.id}><Card product = {prod} color_map={color_map}/></li>})}
            </ul>
            <MainButton path={'/store//catalogue?category=hoodie&page=1'} title={t(`Bestsellers.btn_title`)}/>
            </div>
            </MainContainer>
            
        </section>
    )
};

export default Bestselers;
