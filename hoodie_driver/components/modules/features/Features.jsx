import s from './features.module.scss';
import MainContainer from '@/components/layouts/MainCintainer';
import Model from '../../../public/model.svg';
import Material from '../../../public/material.svg';
import Design from '../../../public/design.svg';
import { v4 } from 'uuid';
import { useTranslations } from 'next-intl';

const features = [
    
    {image: <Model className={s.icon}/>,name: 'model'},
    {image: <Design className={s.icon}/>,name: 'design'},
    {image:<Material className={s.icon}/>, name: 'quality'}
]


const Features = () => {

    const t = useTranslations("Home");

    return (
        <section className={s.container}>
        <MainContainer>

            <h2 className={s.title}>
            {t('Features.title')} 😎
            </h2>
            <ul className={s.feature_list}>
                {features.map(({image,name})=> {
                    return(
                        <li className={s.item} key={v4()}>
                            <p className={s.item_title}>
                                {image}
                                {t(`Features.Items.${name}.title`)}
                                <span>
                                    {t(`Features.Items.${name}.descr`)}
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