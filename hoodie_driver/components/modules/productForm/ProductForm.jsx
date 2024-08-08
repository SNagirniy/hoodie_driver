"use client"

import s from './product_form.module.scss';
import ColorItem from './colorItem';
import IconItem from './iconItem';
import Button from '@/components/elements/mainButton/Button';
import { useState } from 'react';
import { useCart } from '@/contexts/cartContext';
import AmmountInput from '@/components/elements/ammountInput/AmmountInput';
import ProductVariantDropdown from '@/components/elements/productVariantDropdown/ProductVariantDropdown';
import clsx from 'clsx';

const ProductForm =({colors, product})=>{
    const { addToCart} = useCart(); 
    const [selectedColor, setSelectedColor]=useState(()=> {
        if(product?.color){return product?.color?.map((color)=> colors[color])}
        else{ return []}});
    const [message, setMessage]= useState('');
    const [ammount, setAmmount]=useState(1);
    const [isCustomizationOpen, setIsCustomizationOpen]=useState(false)


    const available_colors = product?.available_colors?.map((color) => { const {value, icon}= colors[color]; return {title: color,value,icon}});

    const handleSelectColor =(e)=>{
        const value = e.currentTarget?.value;
        const currentColor = colors[value];
        setSelectedColor([currentColor]);
    };

   const handleChangeMessage = (e)=> {
    const value = e.currentTarget?.value;
    setMessage(value)
   }

   const toggleCustomization =(value)=>{setIsCustomizationOpen(value)}

   const changeAmmount =(e)=>{
    const name = e.currentTarget.name;
    if (name === 'decrement' && ammount > 1) {
        setAmmount( prev => prev - 1)
    } else if( name === 'increment' & ammount < 100) {
        setAmmount( prev => prev + 1)
    }
}

  const handleSubmit = (e)=> {
    e.preventDefault();

    const productData = {
        title: product?.title, 
        price: product?.price, 
        image: product?.imageURL, 
        id: product?.id, 
        ammount: ammount, 
        color: selectedColor,
        message: message};

        addToCart(productData)
  }

  const isChecked = (color)=> selectedColor[0]?.title?.uk === color;
 

    return (
        <form  onSubmit={handleSubmit} className={s.form} >
            <p className={s.radio_capture} id="colors">Доступні кольори для худі:</p>
            <div className={s.radiogroup} role="radiogroup" aria-labelledby="colors" >
                {available_colors?.map((color) => { return(
                    <label className={clsx(s.radio_label, {[s.checked] : isChecked(color.title)})} 
                    key={color.title}>
                <input 
                    onChange={handleSelectColor} 
                    type="radio" 
                    name="color" 
                    value={color.title}/>
                {color.value? <ColorItem color={color.value}/> : <IconItem icon={color.icon} title={color.title}/>}
                </label>)})}
            </div>

            <div className={s.option_btn_container}>
                <label>
                Варіант
                <ProductVariantDropdown 
                isCustomizationOpen={isCustomizationOpen} 
                toggleCustomization={toggleCustomization}/>
                </label>
               <label htmlFor='ammount'>
                Кількість
                <AmmountInput 
                ammount={ammount}
                handleChange={changeAmmount}
                />
               </label>

            </div>
            <div className={clsx(s.msg_box_wrapper, {[s.hiden] : !isCustomizationOpen})}>
            <div className={clsx(s.msg_box, {[s.hiden]: !isCustomizationOpen})}>
                    <label htmlFor="message">Потрібно змінити колір, додати інше лого, картинку або напис, розробити індивідуальний дизайн худі, тощо?  Просто опиши тут свої побажання, і ми зробимо саме те худі 👌</label>
                    <textarea
                        name='message'
                        id="message"
                        value={message}
                        onChange={handleChangeMessage}
                        type="text"
                        placeholder='Пишіть тут...' />
            </div>
            </div>
            <div className={s.divider}></div>
            <div className={s.button_box}>
                <Button type={'submit'} title={'купити'}/>
                <button onClick={()=> setIsCustomizationOpen(!isCustomizationOpen)} className={s.custom_button} type="button">Кастомізувати</button>
            </div>
           

        </form>
    )
};

export default ProductForm;