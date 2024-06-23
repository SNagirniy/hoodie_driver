'use client';
import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import s from './sort_menu.module.scss';

import { sortVariants } from '@/hooks/useSortedProducts';

import Sort_down from '../../../public/sort_down.svg';
import Sort_up from '../../../public/sort_up.svg';

const icons = {
  up: <Sort_up className={s.icon}/>,
  down: <Sort_down className={s.icon}/>
}


const SortMenu = ({sortValue, changeSortValue})=> {

    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef(null);


  const toggleDropdown = () => setIsOpen(!isOpen);
  
  
    const handleSort = e => {
      const value = e.currentTarget?.id;
      changeSortValue(value)
      toggleDropdown();
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


    const currentTitle = (id)=> {
      const {title, img} = sortVariants.find((item) => item.id === id);
      return {title, img: icons[img]}
    }


    return(
        <div onClick={toggleDropdown} className={s.container}>
        <div ref={rootRef} className={s.item}>
          {sortValue ? (
          <p className={s.title}>{currentTitle(sortValue).img}{currentTitle(sortValue).title}</p>
        ) : <p className={s.title}>Cортувати</p>}
          
        </div>
        {(
          <ul className={clsx(s.dropdown, {[s.open]: isOpen})}>
            {sortVariants?.map(({title, img, id}) => (
              <li
                id={id}
                key={id}
                className={s.item}
                onClick={handleSort}
              >
                <p className={s.item_title}>{icons[img]}{title}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    )

};


export default SortMenu;