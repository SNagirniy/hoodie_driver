'use client';

import s from './contacts_form.module.scss';
import clsx from 'clsx';

import MainContainer from "@/components/layouts/MainCintainer";
import Button from '@/components/elements/mainButton/Button';
import Check from '../../../public/check_icon.svg';
import { Checkbox } from '@nextui-org/checkbox';
import { useState,useEffect } from 'react';
import useContactDataValidator from '@/hooks/useContactDataValidator';
import chanels from '@/utils/contactChanels';
import ContactSocialLinks from '@/components/elements/contactSocialLinks/contactSocialLinks';



function ContactsForm() {
    const [name, setName] = useState('');
    const [chanell, setChanel] = useState(chanels.instagram.title);
    const [contactData, setContactData] = useState('');
    const [message, setMessage] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [isDataValid,isFocus, handleFocus] = useContactDataValidator(contactData, chanels[chanell].regEx)



    const handleChange = (e) => {
        const { value, name } = e.currentTarget;
        if (name === 'chanell') { setChanel(value); }
        else if (name === 'name') { setName(value.trim()); }
        else if (name === 'contact_data') { setContactData(value.trim()) }
        else if (name === 'message') { setMessage(value); }
    };


    useEffect(() => setContactData(chanels[chanell].defaultVal), [chanell]);



    const onHandleCheck = (e) => {
        setIsChecked(!isChecked);
    };


    const onSubmit = async (e) => {
        e.preventDefault();

            if(isDataValid) {
                try {

                    const data = {type: 'question',msg:{ name: name, contactData: contactData, chanell: chanell, message: message}};
                    const res = await fetch('/lib/sendMessage', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                      });
        
                    const result = await res.json();
                        if (res.ok) {
                        console.log(result.message)
                        resetFields()
                        } else {
                        console.log(result.message);
                        }
                    
                } catch (error) {
                    console.log(error)
                }
            }
        
               
    };

    const resetFields = () => {
        setName('');
        setContactData(chanels.instagram.defaultVal);
        setMessage('');
        setChanel(chanels.instagram.title);
        setIsChecked(false);

    };



    return (
        <section className={s.section}>
            <MainContainer>
                <div className={s.container}>

                    <hgroup className={s.title_box}>
                        <p>Маєш питання або пропозиції?</p>
                        <h3>Напиши нам!</h3>
                    </hgroup>

                    <form onSubmit={onSubmit} className={s.form}>
                        <div className={s.box}>
                            <label className={s.label}>Ім'я
                                <input minLength={2} onChange={handleChange} value={name} className={s.input} name='name' type="text" autoComplete='false' required />
                            </label>
                            <label className={s.label}>{chanell}
                                <input onChange={handleChange} value={contactData} className={ clsx(s.input,{[s.not_valid]: !isDataValid & isFocus}, {[s.valid]: isDataValid})} name='contact_data' type={chanels[chanell].type} autoComplete='false' aria-autocomplete='false' onFocus={handleFocus} onBlur={handleFocus} required />
                            </label>
                        </div>
                        <div className={clsx(s.box, s.radio_group)} role="radiogroup">

                            <label><input onChange={handleChange} type="radio" name="chanell" value={chanels.instagram.title} checked={chanels.instagram.title === chanell} /><span><Check className={s.icon} /></span>{chanels.instagram.title}</label>
                            <label><input onChange={handleChange} type="radio" name="chanell" value={chanels.viber.title} checked={chanels.viber.title === chanell} /><span><Check className={s.icon} /></span>{chanels.viber.title}</label>

                            <label><input onChange={handleChange} type="radio" name="chanell" value={chanels.telegram.title} checked={chanels.telegram.title === chanell} /><span><Check className={s.icon} /></span>{chanels.telegram.title}</label>

                            <label><input onChange={handleChange} type="radio" name="chanell" value={chanels.email.title} checked={chanels.email.title === chanell} /><span><Check className={s.icon} /></span>{chanels.email.title}</label>
                        </div>

                        <div className={s.msg_box}>
                            <label htmlFor="message">Повідомлення</label>
                            <textarea
                                name='message'
                                id="message"
                                value={message}
                                onChange={handleChange}
                                type="text"
                                required
                                placeholder='Пишіть тут...' />
                        </div>

                        <Checkbox
                            classNames={{
                                base: s.base,
                                label: s.label,
                                icon: s.check_icon,
                            }}
                            isSelected={isChecked} onValueChange={onHandleCheck}
                            name='privacy'>
                            Так, я погоджуюся з Політикою приватності
                        </Checkbox>

                        <Button disabled={!isChecked} type={'submit'} title={'Відправити'} />

                    </form>

                </div>

            </MainContainer>
        </section>);

}



export default ContactsForm;