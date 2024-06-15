'use client';
import s from './modal_form.module.scss';
import Button from '@/components/elements/mainButton/Button';
import Check from '../../../public/check_icon.svg';
import { useState, useEffect } from 'react';


const chanels = {
    instagram: {title:'instagram',
        type: 'text',
        defaultVal: '@',
    },
    telegram: {title:'telegram',
        type: 'tel',
        defaultVal: '+380',
    },
    viber: {title:'viber',
        type: 'tel',
        defaultVal: '+380',
    },
};

const ModalForm = ({onClose})=> {

    const [contactData, setContactData] = useState(chanels.instagram.defaultVal);
    const [chanell, setChanel] = useState(chanels.instagram.title);

    useEffect(()=> setContactData(chanels[chanell].defaultVal),[chanell]);

    const onSubmit = async(e)=>{
        e.preventDefault();

        const data = {type: 'fast_order',msg:{ contactData: contactData, chanell: chanell}};
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
      onClose()
    } else {
     console.log(result.message);
    }
    };

    const handleChange=(e)=>{
        const {value,type} = e.currentTarget;
        if(type === 'radio') {setChanel(value)} else{ setContactData(value)} 
    }

    const resetFields = ()=> {
        setChanel(chanels.instagram.title);
        setContactData(chanels.instagram.defaultVal)
    }


    return(
        <div className={s.container}>
            <h2 className={s.title}>Швидке замовлення</h2>
            <form onSubmit={onSubmit} className={s.form}>
                <label className={s.tel_label}>Номер телефону
                <input onChange={handleChange} name='contact_data'  type={chanels[chanell].type} value = {contactData} required />
                </label>
                <p id="question">Як краще з Вами зв‘язатися?</p>
                <div className={s.radio_group} role="radiogroup"  aria-labelledby="question">
                    
                    <label><input onChange={handleChange}  type="radio" name="chanell" value={chanels.instagram.title} checked={chanels.instagram.title=== chanell}/><span><Check className={s.icon}/></span>{chanels.instagram.title}</label>
                    
                    <label><input onChange={handleChange} type="radio"  name="chanell" value={chanels.telegram.title} checked={chanels.telegram.title=== chanell}/><span><Check className={s.icon}/></span>{chanels.telegram.title}</label>
                    
                    <label ><input onChange={handleChange}  type="radio" name="chanell" value={chanels.viber.title} checked={chanels.viber.title=== chanell}/><span><Check className={s.icon}/></span>{chanels.viber.title}</label>
                </div>

                <Button type={'submit'} title={'Замовляю швидко!'}/>
            </form>
        </div>
    )
};

export default ModalForm;