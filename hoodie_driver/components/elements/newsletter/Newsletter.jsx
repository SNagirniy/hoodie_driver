'use client';
import s from './newsletter.module.scss';
import { useState } from 'react';
import Button from '../mainButton/Button';
import { Checkbox } from '@nextui-org/checkbox';
import useContactDataValidator from '@/hooks/useContactDataValidator';
import chanels from '@/utils/contactChanels';
import { toast } from 'react-toastify';
import clsx from 'clsx';

const Newsletter = ()=>{
    const [email, setEmail] = useState(chanels.email.defaultVal);
    const[isChecked, setIsChecked] = useState(false);
    const [isValid, isFocus, handleFocus] = useContactDataValidator(email, chanels.email.regEx);
   

    const handleChange = (e) => {
        const { value } = e.target;
        setEmail(value.trim())
      };
      const onHandleCheck = ()=> {
        setIsChecked(!isChecked)
      };

      const reset = ()=> {
        setEmail(chanels.email.defaultVal);
        setIsChecked(false)
      };


      const handleSubmit = async(e)=>{
        e.preventDefault();

            try {
                const res = await fetch('/lib/sendpulse', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({email: email}),
                  });
                    const result = await res.json();
                if (result.ok) {
                    toast.success('Дякуємо! Підписка оформлена!')
                }} catch (error) {
                  toast.error('Вибачте, сервіс тимчасово недоступний. Спробуйте пізніше.')
                } finally{ reset()}
        };


    return (
        <div className={s.newsletter}>
            <hgroup className={s.head}>
                <h3 className={s.title}>Перші дізнаєтесь Ви!</h3>
                <p className={s.description}>Не пропустіть свіжі новини та унікальні акції — підпишіться на наш newsletter зараз.</p>
            </hgroup>
            <div className={s.form_container}>
                <form  onSubmit={handleSubmit} className={clsx(s.form, {[s.not_valid]: !isValid & isFocus}, {[s.valid] : isValid})}>
                    <input
                    className={clsx(s.email_input, {[s.not_valid]: !isValid & isFocus}, {[s.valid] : isValid}) }
                     placeholder='Твій email' onChange={handleChange} 
                     name='email'
                     autoComplete='false'
                     type="email"  value={email}
                     onFocus={handleFocus}
                     onBlur={handleFocus}
                     
                   
                    
                     />
                     

                    <Button 
                    disabled={!isChecked}
                    type={'submit'}
                    title={'Підписатися'}
                    />
                </form>
                <Checkbox
                classNames={
                   { base: s.base,
                    label: s.label,
                    icon: s.icon,
                   }
                }
                 isSelected={isChecked} onValueChange={onHandleCheck}
                 name='privacy'>
                    Так, я погоджуюся з Політикою приватності
                </Checkbox>
               
            </div>

        </div>
    )
};


export default Newsletter;
