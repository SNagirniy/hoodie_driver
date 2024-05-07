import s from './features.module.scss';
import MainContainer from '@/components/layouts/MainCintainer';
import Model from '../../../public/model.svg';
import Material from '../../../public/material.svg';
import Design from '../../../public/design.svg';
import { v4 } from 'uuid';

const features = [
    
    {image: <Model className={s.icon}/>,title: 'Ми розробили унікальну модель, яка підходить під механічну та автоматичну коробку передач', sub_title: 'У деяких  випадках  нестандартних селекторів/ручок КПП - виготовляємо худі під індивідуальні  розміри'},
    {image: <Design className={s.icon}/>,title: 'Окрім різноманітних дизайнів у наявності, пропонуємо створити свій кастомний дизайн худі на КПП', sub_title: 'Можливо додати будь-які принти, лого, надписи. Обрати колір худі чи окремих його елементів'},
    {image:<Material className={s.icon}/>,title: 'Гарантія високої якості матеріалів, пошиву та принтів. Безкоштовне подарункове  пакування ', sub_title: 'Ми ретельно слідкуємо за якістю кожного вироба, тому гарантуємо, що наші худі виглядатимуть навіть краще, ніж на фото'}
]


const Features = () => {

    return (
        <section className={s.container}>
        <MainContainer>

            <h2 className={s.title}>
            Наші худі на КПП - кращий подарунок, який піднімає настрій та викликає  вау-ефект у водія та пасажирів 😎
            </h2>
            <ul className={s.feature_list}>
                {features.map(({image, title, sub_title})=> {
                    return(
                        <li className={s.item} key={v4()}>
                            <p className={s.item_title}>
                                {image}
                                {title}
                                <span>
                                    {sub_title}
                                </span>
                            </p>
                        </li>
                    )
                })}

            </ul>

        </MainContainer>
        </section>
    )
};

export default Features;