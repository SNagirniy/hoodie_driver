'use client'

import s from './checkout_contact_data.module.scss';
import { Checkbox } from '@nextui-org/checkbox';
import clsx from 'clsx';
import { useState } from 'react';

const CheckoutContactData = ()=> {
const [isChecked, setIsChecked] = useState(false);

const toggleChecked = ()=>{
    setIsChecked(!isChecked)
};



return(
    <div className={s.block_wrapper}>
                        <h3 className={s.block_title}>
                            Не хочеш щоб тебе турбували дзвінком? Залиш свій Вайбер, Інстаграм, чи Телеграм для зяв‘язку ☺️</h3>
                            <Checkbox
                                checked={isChecked}
                                onChange={toggleChecked}
                                classNames={
                                { base: s.base,
                                label: s.label,
                                icon: s.icon,}}
                                 name='privacy'>
                                {"Не дзвонити"}
                            </Checkbox>
                            <div className={clsx(s.hidden_container, {[s.open]: isChecked})}>
                            <div className={clsx(s.input_wrapper, {[s.open]: isChecked})}>
                                <label className={s.label}>
                                Вайбер
                                <input className={s.input} type="text" />
                                </label>
                                <label className={s.label}>
                                Інстаграм
                                <input className={s.input} type="text" />
                                </label>
                                <label className={s.label}>
                                Телеграм
                                <input className={s.input} type="text" />
                                </label>
                            </div>
                            </div>
                    </div>
)
}

export default CheckoutContactData;