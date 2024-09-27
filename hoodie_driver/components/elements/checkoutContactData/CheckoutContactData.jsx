'use client'

import s from './checkout_contact_data.module.scss';
import { Checkbox } from '@nextui-org/checkbox';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import chanels from '@/utils/contactChanels';
import useContactDataValidator from '@/hooks/useContactDataValidator';
import Check from '../../../public/check_icon.svg';

const CheckoutContactData = ({chanell,contactData, setChanel,setContactData})=> {
const [isChecked, setIsChecked] = useState(false);
const [isDataValid,isFocus, handleFocus] = useContactDataValidator(contactData, chanels[chanell].regEx)

const toggleChecked = ()=>{
    setIsChecked(!isChecked)
};

const handleChange = (e) => {
    const { value, name } = e.currentTarget;
    if (name === 'chanell') { setChanel(value); }
    else if (name === 'contact_data') { setContactData(value.trim()) }
    
};

useEffect(() => setContactData(chanels[chanell].defaultVal), [chanell]);


return(
    <div className={s.block_wrapper}>
                        <h3 className={s.block_title}>
                            Не хочеш щоб тебе турбували дзвінком? Залиш свій Вайбер, Інстаграм, чи Телеграм для зяв‘язку ☺️</h3>
                            <Checkbox
                                checked={isChecked}
                                onChange={toggleChecked}
                                classNames={
                                { base: s.base,
                                label: s.check_label,
                                icon: s.icon,}}
                                 name='privacy'>
                                {"Не дзвонити"}
                            </Checkbox>
                            <div className={clsx(s.hidden_container, {[s.open]: isChecked})}>
                            <div className={clsx(s.input_wrapper, {[s.open]: isChecked})}>
                            <label className={s.label}>{chanell}
                                <input onChange={handleChange} value={contactData} className={ clsx(s.input,{[s.not_valid]: !isDataValid & isFocus & contactData?.length > 0}, {[s.valid]: isDataValid})} name='contact_data' type={chanels[chanell].type} autoComplete='false' aria-autocomplete='false' onFocus={handleFocus} onBlur={handleFocus}/>
                            </label>
                            <div className={s.radio_group} role='radiogroup'>
                            <label><input onChange={handleChange} type="radio" name="chanell" value={chanels.instagram.title} checked={chanels.instagram.title === chanell} /><span><Check className={s.radio_icon} /></span>{chanels.instagram.title}</label>
                            <label><input onChange={handleChange} type="radio" name="chanell" value={chanels.viber.title} checked={chanels.viber.title === chanell} /><span><Check className={s.radio_icon} /></span>{chanels.viber.title}</label>

                            <label><input onChange={handleChange} type="radio" name="chanell" value={chanels.telegram.title} checked={chanels.telegram.title === chanell} /><span><Check className={s.radio_icon} /></span>{chanels.telegram.title}</label>
                            </div>
                           
                            </div>
                            </div>
                    </div>
)
}

export default CheckoutContactData;