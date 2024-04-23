import s from './features.module.scss';
import Image from 'next/image';

import quality from '../../public/quality_icon.svg';
import ownprod from '../../public/ownprod_icon.svg';
import pac from '../../public/package_icon.svg';
import indiv from '../../public/indiv_icon.svg';

const Features =()=>{

    return(
        <section className={s.section}>
            <h2 className={s.hidden}>Наші переваги</h2>
            <ul className={s.list}>
            <li className={s.list_item}>
                       <div className={s.thumb}>
                           <Image className={s.image} src={pac} alt='package feature icon'/>
                       </div>
                        <h3 className={s.title}>Подарункова упаковка для <strong>Кожного</strong> Худі</h3>
                    </li>
                    <li className={s.list_item}>
                       <div className={s.thumb}>
                           <Image className={s.image} src={ownprod} alt='own production feature icon'/>
                       </div>
                        <h3 className={s.title}><strong>Власне</strong> виробництво</h3>
                    </li>
                    <li className={s.list_item}>
                       <div className={s.thumb}>
                           <Image className={s.image} src={indiv} alt='individual feature icon'/>
                       </div>
                        <h3 className={s.title}><strong>Індивідуальний</strong> підхід</h3>
                    </li>
                    <li className={s.list_item}>
                       <div className={s.thumb}>
                           <Image className={s.image} src={quality} alt='quality feature icon'/>
                       </div>
                        <h3 className={s.title}><strong>Гарантія</strong> якості</h3>
                    </li>
            </ul>
        </section>
    )
};


export default Features;