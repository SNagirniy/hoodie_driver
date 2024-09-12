"use client"
import s from './filter_menu.module.scss';
import Filter from '../../../public/filter.svg';
import StoreAside from '@/components/modules/store_aside/StoreAside';
import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import Modal from '@/components/modules/modal/Modal';
import useWindowSize from '@/hooks/useWindowSize';



const FilterMenu =({categories,color_map})=>{

    const[isMenuOpen, setIsMenuOpen]=useState(false);

    const currentRef= useRef();
    const {width} = useWindowSize();

    const toggleMenu = ()=> setIsMenuOpen(!isMenuOpen);

    const closeMenu = ()=> setIsMenuOpen(false);

    useEffect(()=> {width >= 1280 && closeMenu()}, [width])


    return(

        <div ref={currentRef} className={s.filter_menu_container}>
        <button onClick={toggleMenu} className={s.open_filter_btn} type='button'>
            <Filter className={s.filter_icon}/>
        </button>

        {isMenuOpen && <Modal onClose={closeMenu}>
        <div className={s.filter_drop_down_content}>
           <StoreAside categories={categories} color_map={color_map} onCloseFilterMenu={closeMenu}/>
          </div>
        </Modal>}
        </div>
    )
};

export default FilterMenu;
