'use client'

import s from './ammount_input.module.scss';
import clsx from 'clsx';

const AmmountInput =({ammount, handleChange})=> {

    return (
        <div className={s.ammount_btn_box}>
        <button onClick={handleChange} 
        type='button' 
        name='decrement' 
        className={ clsx(s.ammount_button,s.decrement_btn)}>
            <span>-</span>
        </button>
        
        <input 
        readOnly 
        value={ammount} 
        type="number" 
        min={1} 
        max={100} 
        step={1}/>

        <button 
        onClick={handleChange} 
        type='button' 
        name='increment' 
        className={clsx(s.ammount_button,s.increment_btn)}>
            <span>+</span>
        </button>
    </div>
    )
};


export default AmmountInput;