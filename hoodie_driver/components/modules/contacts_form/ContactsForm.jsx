'use client';

import s from './contacts_form.module.scss';
import clsx from 'clsx';

import MainContainer from "@/components/layouts/MainCintainer";
import Button from '@/components/elements/mainButton/Button';
import Check from '../../../public/check_icon.svg';
import { Checkbox } from '@nextui-org/checkbox';
import { useState } from 'react';


const chanels = {
    Inst: 'instagram',
    Tlgrm: 'telegram',
    Vib: 'viber',
    Email: 'email',
}




const ContactsForm = ()=> {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [chanell, setChanel] = useState(chanels.Inst);
    const [message, setMessage]=useState('');
    const [isChecked, setIsChecked] = useState(false)


    const handleChange=(e)=>{
        const {value, name} = e.currentTarget;
        if(name === 'chanell') {setChanel(value)} 
        else if(name === 'name') { setName(value.trim())} 
        else if(name === 'email'){setEmail(value.trim())}
        else if(name === 'message'){setMessage(value)}
    };


    const onHandleCheck = (e)=> {
        setIsChecked(!isChecked)
      };


      const onSubmit = async(e)=>{
        e.preventDefault();


        const data = {type: 'question',msg:{ name: name, email: email, chanell: chanell, message: message}};
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
    };

    const resetFields =()=>{
        setName('');
        setEmail('');
        setMessage('');
        setChanel(chanels.Inst);
        setIsChecked(false);

    }



return (
<section className={s.section}>
<MainContainer>
    <div className={s.container}>

    <hgroup className={s.title_box} >
        <p>Маєш питання або пропозиції?</p>
        <h3>Напиши нам!</h3>
    </hgroup>

    <form onSubmit={onSubmit} className={s.form}> 
        <div className={s.box}>
            <label className={s.label}>Ім'я<input onChange={handleChange} value={name} className={s.input} name='name' type="text"  required/></label>
            <label className={s.label}>Email<input onChange={handleChange} value={email} className={s.input} name='email' type="email" pattern='[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}' required/></label>
        </div>
        <div className={clsx(s.box, s.radio_group)} role="radiogroup">
                    
                    <label><input onChange={handleChange}  type="radio" name="chanell" value={chanels.Inst} checked={chanels.Inst=== chanell}/><span><Check className={s.icon}/></span>{chanels.Inst}</label>
                    <label ><input onChange={handleChange}  type="radio" name="chanell" value={chanels.Vib} checked={chanels.Vib=== chanell}/><span><Check className={s.icon}/></span>{chanels.Vib}</label>
                    
                    <label><input onChange={handleChange} type="radio"  name="chanell" value={chanels.Tlgrm} checked={chanels.Tlgrm=== chanell}/><span><Check className={s.icon}/></span>{chanels.Tlgrm}</label>
                    
                    <label ><input onChange={handleChange}  type="radio" name="chanell" value={chanels.Email} checked={chanels.Email=== chanell}/><span><Check className={s.icon}/></span>{chanels.Email}</label>
                </div>

                <div className={s.msg_box}>
                <label htmlFor="message">Повідомлення</label>
                <textarea
                    name='message'
                    id="message"
                    value ={message}
                    onChange={handleChange}
                    type="text"
                    required
                    placeholder='Пишіть тут...'/>
                </div>

                <Checkbox
                classNames={
                   { base: s.base,
                    label: s.label,
                    icon: s.check_icon,
                   }
                }
                 isSelected={isChecked} onValueChange={onHandleCheck}
                 name='privacy'>
                    Так, я погоджуюся з Політикою приватності
                </Checkbox>
               
                <Button disabled={!isChecked} type = {'submit'} title={'Відправити'} />

    </form>

    </div>
  


</MainContainer>
</section>)

};



export default ContactsForm;