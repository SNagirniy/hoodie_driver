'use client'
import s from './store_item.module.scss';
import { useState, useEffect,useRef } from 'react';
import clsx from 'clsx';
import FooterNavList from '../../footer_nav_list/FooterNavList';
import { usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';


const StoreItem =({categories, closeMenuFunc})=>{
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef(null);
    const pathname = usePathname();

    const t = useTranslations("Home");
    

    const toggleDropdown = () => setIsOpen(!isOpen);
  
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
  
    return (
      <div onClick={toggleDropdown} className={s.container}>
        <div ref={rootRef} className={s.item}>
          <p className={clsx(s.title, { [s.active]: pathname.includes('/store') })}>{t(`Navigation.shop`)}</p>
        </div>
        
          <div className={clsx(s.dropdown, {[s.open]: isOpen})}>
          <FooterNavList links={categories} closeMenuFunc={closeMenuFunc}/>
          </div>
      </div>
    );
}


export default StoreItem;
