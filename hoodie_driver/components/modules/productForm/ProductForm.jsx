"use client"

import s from './product_form.module.scss';
import ColorItem from './colorItem';
import IconItem from './iconItem';
import { useState } from 'react';
import clsx from 'clsx';

const ProductForm =({colors})=>{

    const [selectedColor, setSelectedColor]=useState(null);
    const [message, setMessage]= useState('')

    const handleSelectColor =(e)=>{
        const value = e.currentTarget?.value;
        value ?? setSelectedColor(value);
    };

   const handleChangeMessage = (e)=> {
    const value = e.currentTarget?.value;
    setMessage(value)
   }

   

    return (
        <form className={s.form} >
            <p className={s.radio_capture} id="colors">Доступні кольори для худі:</p>
            <div className={s.radiogroup} role="radiogroup" aria-labelledby="colors" >
                {colors?.map((color) => { return(<label className={s.radio_label}  key={color.title}>
                <input onChange={handleSelectColor} type="radio" name="color" value={color.title}/>
                {color.value? <ColorItem color={color.value}/> : <IconItem icon={color.icon} title={color.title}/>}
                </label>)})}
            </div>

            <div className={s.msg_box}>
                            <label htmlFor="message">Потрібно змінити колір, додати інше лого, картинку або напис, розробити індивідуальний дизайн худі, тощо?  Просто опиши тут свої побажання, і ми зробимо саме те худі 👌</label>
                            <textarea
                                name='message'
                                id="message"
                                value={message}
                                onChange={handleChangeMessage}
                                type="text"
                                required
                                placeholder='Пишіть тут...' />
                        </div>

        </form>
    )
};

export default ProductForm;