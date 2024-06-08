'use client';
import s from './modal_form.module.scss';
import Button from '@/components/elements/mainButton/Button';
import Check from '../../../public/check_icon.svg';
import { useState } from 'react';


const chanels = {Inst: 'instagram',
    Tlgrm: 'telegram',
    Vib: 'viber'
}

const ModalForm = ({onClose})=> {

    const [phone, setPhone] = useState('+380');
    const [chanell, setChanel] = useState(chanels.Inst);

    const onSubmit = async(e)=>{
        e.preventDefault();

        const data = {phone: phone, chanell: chanell};
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
    }

    const handleChange=(e)=>{
        const {value,type} = e.currentTarget;
        if(type === 'radio') {setChanel(value)} else{ setPhone(value)} 
    }

    const resetFields = ()=> {
        setChanel(chanels.Inst);
        setPhone('+380')
    }


    return(
        <div className={s.container}>
            <h2 className={s.title}>Швидке замовлення</h2>
            <form onSubmit={onSubmit} className={s.form}>
                <label className={s.tel_label}>Номер телефону
                <input onChange={handleChange} name='phone'  type="tel" value = {phone} required placeholder='+380'/>
                </label>
                <p id="question">Як краще з Вами зв‘язатися?</p>
                <div className={s.radio_group} role="radiogroup"  aria-labelledby="question">
                    
                    <label><input onChange={handleChange}  type="radio" name="chanell" value={chanels.Inst} checked={chanels.Inst=== chanell}/><span><Check className={s.icon}/></span>{chanels.Inst}</label>
                    
                    <label><input onChange={handleChange} type="radio"  name="chanell" value={chanels.Tlgrm} checked={chanels.Tlgrm=== chanell}/><span><Check className={s.icon}/></span>{chanels.Tlgrm}</label>
                    
                    <label ><input onChange={handleChange}  type="radio" name="chanell" value={chanels.Vib} checked={chanels.Vib=== chanell}/><span><Check className={s.icon}/></span>{chanels.Vib}</label>
                </div>

                <Button type={'submit'} title={'Замовляю швидко!'}/>
            </form>
        </div>
    )
};

export default ModalForm;