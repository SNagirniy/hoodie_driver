'use client';
import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import s from './sort_menu.module.scss';
import { v4 } from 'uuid';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import Sort_down from '../../../public/sort_down.svg';
import Sort_up from '../../../public/sort_up.svg';

const sortVariants = [
  {title: 'price',
  img: 'down',
  ascending: 'desc',
  sort_by:"price"},
  {title: 'price',
  img: 'up',
  ascending: "asc",
  sort_by:"price"},
  {title: 'raiting',
  img: 'down',
  ascending: 'desc',
  sort_by:"raiting"},
  {title: 'raiting',
  img: 'up',
  ascending: "asc",
  sort_by:"raiting"},
  {title: 'date',
    img: 'down',
    ascending: "desc",
    sort_by:"date"},
    {title: 'date',
      img: 'up',
      ascending: "asc",
      sort_by:"date"}
];

const icons = {
  up: <Sort_up className={s.icon}/>,
  down: <Sort_down className={s.icon}/>
}


const SortMenu = ({sortValue})=> {

    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef(null);


  const toggleDropdown = () => setIsOpen(!isOpen);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  
  
    const handleClick = e => {
      const value = e.currentTarget?.value;
      const params = new URLSearchParams(searchParams);
     
      if (value) {
        const [sort_by,ascending] = value.split(',')
       
        params.set('sort_by', sort_by);
        params.set('ascending', ascending)
        params.set('page', 1)
      } else {
        params.delete('sort_by');
        params.delete('ascending');
      }
      router.replace(`${pathname}?${params.toString()}`);
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
            {sortVariants?.map(({title, img, sort_by, ascending}) => (
              <li
                key={v4()}
                className={s.item}
              >
                <button onClick={handleClick}type='button' value={[sort_by, ascending]}>{icons[img]}{title}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )

};


export default SortMenu;