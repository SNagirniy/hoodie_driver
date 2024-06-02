'use client';
import s from './newsletter.module.scss';
import { useState } from 'react';
import Button from '../mainButton/Button';
import { Checkbox } from '@nextui-org/checkbox';

const Newsletter = ()=>{
    const [email, setEmail] = useState('');
    const[isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        const { value } = e.target;
        setEmail(value.trim())
      };

      const handleSubmit = (e)=> {
            e.preventDefault();
            console.log(email);

            setEmail('');
            setIsChecked(false)

      };

      const onHandleCheck = (e)=> {

        setIsChecked(!isChecked)

      };



    return (
        <div className={s.newsletter}>
            <hgroup className={s.head}>
                <h3 className={s.title}>Перші дізнаються Ви!</h3>
                <p className={s.description}>Не пропустіть свіжі новини та унікальні акції — підпишіться на наш newsletter зараз.</p>
            </hgroup>
            <div className={s.form_container}>
                <form  onSubmit={handleSubmit} className={s.form}>
                    <input
                    className={s.email_input}
                     placeholder='Твій email' onChange={handleChange} 
                     name='email'
                     autoComplete='false'
                     type="email"  value={email}
                     pattern='[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}'
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
