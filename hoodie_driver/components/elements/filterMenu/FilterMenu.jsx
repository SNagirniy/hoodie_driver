"use client"
import s from './filter_menu.module.scss';
import Filter from '../../../public/filter.svg';
import StoreAside from '@/components/modules/store_aside/StoreAside';
import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';



const FilterMenu =({categories,color_map})=>{

    const[isMenuOpen, setIsMenuOpen]=useState(false);

    const currentRef= useRef();

    const toggleMenu = ()=> setIsMenuOpen(!isMenuOpen);

    const closeMenu = ()=> setIsMenuOpen(false);




    useEffect(() => {
        const handleClick = event => {
          const { target } = event;
          if (target instanceof Node && !currentRef.current?.contains(target)) {
            isMenuOpen && setIsMenuOpen(false);
          }
        };
    
        window.addEventListener('click', handleClick);
    
        return () => {
          window.removeEventListener('click', handleClick);
        };
      }, [isMenuOpen]);
    return(

        <div ref={currentRef} className={s.filter_menu_container}>
        <button onClick={toggleMenu} className={s.open_filter_btn} type='button'>
            <Filter className={s.filter_icon}/>
        </button>
        <div className={clsx(s.filter_drop_down,{[s.open]:isMenuOpen})}>
          <div  className={s.filter_drop_down_content}>
           <StoreAside categories={categories} color_map={color_map} onCloseFilterMenu={closeMenu}/>
          </div>
        </div>
        </div>
    )
};

export default FilterMenu;