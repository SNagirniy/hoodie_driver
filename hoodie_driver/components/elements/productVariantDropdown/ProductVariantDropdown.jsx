'use client'

import s from "./product_variant_dropdown.module.scss";
import IndicatorIcon from '../../../public/indicator_icon.svg';
import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { v4 } from 'uuid';


const Variants = ['зі своїм принтом', 'без принта','як на фото'];

const ProductVariantDropdown =({isCustomizationOpen,toggleCustomization})=> {
    const [isOpen, setIsOpen] = useState(false);
    const [variant, setVariant]= useState('як на фото')
    const rootRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const variantsToRender = Variants.filter(i => i !== variant);
  
    const handleClick = e => {
        const value = e.currentTarget?.id;
        setVariant(value);
        toggleDropdown()
    
    };
      useEffect(()=> {if(isCustomizationOpen ) {setVariant('зі своїм принтом')}}, [isCustomizationOpen])
    
      useEffect(()=> {if(variant === 'зі своїм принтом') {toggleCustomization(true)}
      else {toggleCustomization(false)}} ,[variant])
      
    useEffect(() => {
        const handleClick = event => {
          const { target } = event;
          if (target instanceof Node && !rootRef.current?.contains(target)) {
            isOpen && setIsOpen(false);
          }
        };
    
        window.addEventListener('click', handleClick);
    
        return () => {
          window.removeEventListener('click', handleClick);
        };
      }, [isOpen]);

  
    return(
  
          <div onClick={toggleDropdown} className={s.container}>
          <div ref={rootRef}>
          <p className={s.button}><span>{variant}</span><IndicatorIcon className={clsx(s.indicator_icon, {[s.open]: isOpen}) }/></p>
          </div>
            <ul className={clsx(s.dropdown, {[s.open]: isOpen})}>
              {variantsToRender?.map((el) => 
                <li
                  onClick={handleClick}
                  id={el}
                  key={v4()}>
                  <p className={s.item}>{el}</p>
                </li>
              )}
            </ul>
        </div>
      )

};


export default ProductVariantDropdown;

