'use client'

import s from "./product_variant_dropdown.module.scss";
import IndicatorIcon from '../../../public/indicator_icon.svg';
import { useState, useRef, useEffect } from 'react';
import { useTranslations } from "next-intl";
import clsx from 'clsx';
import { v4 } from 'uuid';


import Variants from "@/utils/customizationVariants";



const ProductVariantDropdown =({variant, setVariant})=> {
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef(null);

    const t = useTranslations("Product_detail");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const variantsToRender =Object.keys(Variants).filter(i => i !== variant);
  
    const handleClick = e => {
        const value = e.currentTarget?.id;
        setVariant(value);
        toggleDropdown()
    
    };

      
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
          <div 
              role="combobox"
              id="select"
              value="Select"
              aria-controls="listbox"
              aria-haspopup="listbox"
              tabIndex="0"
              aria-expanded="false" 
              ref={rootRef}
              className={s.btn_box}>
          <p className={s.button}><span>{t(`variant_btn.${[variant]}`)}</span><IndicatorIcon className={clsx(s.indicator_icon, {[s.open]: isOpen}) }/></p>
          </div>
            <ul 
              role="listbox" 
              id="listbox" 
              className={clsx(s.dropdown, {[s.open]: isOpen})}>
              {variantsToRender?.map((el) => 
                <li
                 role="option"
                  onClick={handleClick}
                  id={el}
                  key={v4()}>
                  <p className={s.item}>{t(`variant_btn.${[el]}`)}</p>
                </li>
              )}
            </ul>
        </div>
      )

};


export default ProductVariantDropdown;

