'use client';
import s from './newsletter.module.scss';
import { useState } from 'react';
import Button from '../mainButton/Button';
import { Checkbox } from '@nextui-org/checkbox';
import useContactDataValidator from '@/hooks/useContactDataValidator';
import chanels from '@/utils/contactChanels';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';

const Newsletter = ()=>{
    const [email, setEmail] = useState(chanels.email.defaultVal);
    const[isChecked, setIsChecked] = useState(false);
    const [isValid, isFocus, handleFocus] = useContactDataValidator(email, chanels.email.regEx);
   
    const t = useTranslations("Actions");
    const tF = useTranslations("Footer");

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
          if(email === '') {return}
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
                    toast.success(t("subscribe"))
                }} catch (error) {
                  toast.error('Вибачте, сервіс тимчасово недоступний. Спробуйте пізніше.')
                } finally{ reset()}
        };


    return (
        <div className={s.newsletter}>
            <hgroup className={s.head}>
                <h3 className={s.title}>{tF("newsletter.title")}</h3>
                <p className={s.description}>{tF("newsletter.descr")}</p>
            </hgroup>
            <div className={s.form_container}>
                <form  onSubmit={handleSubmit} className={clsx(s.form, {[s.not_valid]: !isValid & isFocus & email.length > 0}, {[s.valid] : isValid})}>
                    <input
                    className={clsx(s.email_input, {[s.not_valid]: !isValid & isFocus & email.length > 0}, {[s.valid] : isValid}) }
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
                    {tF("newsletter.privacy")}
                </Checkbox>
               
            </div>

        </div>
    )
};


export default Newsletter;
