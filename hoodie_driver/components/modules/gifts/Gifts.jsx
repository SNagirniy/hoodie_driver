'use client'

import { useLocale } from 'next-intl';
import s from './gifts.module.scss';
import clsx from 'clsx';



const Gifts = ({gift,addGift, gifts_options})=> {

    const locale = useLocale();

    const handleChooseGift = (e)=> {
        const id = e?.currentTarget?.value;
        const currentGift = gifts_options.findIndex((el)=> el.id === id)
        addGift(gifts_options[currentGift])
    }

    const isChecked = (id)=> {return id === gift.id}

    if(gifts_options?.length === 0) {return null}
    return (
        <div role='radiogroup' className={s.container}>
            <h3 className={s.title}>Будь-ласка, оберіть подарунок</h3>
             <div className={s.gifts_list}>
            {gifts_options.map((item)=> { return <label className={clsx(s.gift_item, {[s.checked]: isChecked(item.id)})} key={item.id}>
                <input onChange={handleChooseGift} value={item.id} className={s.radio_input_hidden} type="radio"  name='gift_item'/>
                <div className={s.thumb}><img src={item.imageURL} alt={item.title[locale]} /></div>
                <p className={s.item_title}>{item.title[locale]}</p>
                <div className={s.details_hidden}>
                    <p>{item?.description[locale]}</p>
                </div>
            </label>})}
        </div>
        </div>
       
    )
};


export default Gifts;


