'use client';
import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import s from './sort_menu.module.scss';
import { v4 } from 'uuid';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import CurrentFilterValueButton from '../currentFilterValueButton/CurrentFilterValueButton';
import IndicatorIcon from  '../../../public/indicator_icon.svg';

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


const SortMenu = ()=> {

    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef(null);
    const [currentFilters, setCurrentFilters]=useState([])


  const toggleDropdown = () => setIsOpen(!isOpen);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();



  const filterSearchParams = (searchPrms)=> { 
    const params = []
    for (const [key, value] of searchPrms) {
    const check = ['page','ascending'].some((el)=> el === key)
        if(!check) {
          if(key === 'sort_by'){ params.push({key,value,sortType: searchPrms.get('ascending')})} 
          else{params.push({key,value})}
          
        }
      };
    return params}


    useEffect(()=> setCurrentFilters(filterSearchParams(searchParams)), [searchParams]);

    const handleRemovefilter = (e)=> {

      const key = e.currentTarget?.value;
      const params = new URLSearchParams(searchParams);
      if(key){
        params.delete(key);
        if(key === 'sort_by') {
          params.delete('ascending')
          params.set('page', 1)
        }
      }
      router.replace(`${pathname}?${params.toString()}`);
    }

 
  
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


    return(
      <div className={s.menu_box}>
        <ul className={s.current_filter_box}>
          {currentFilters?.map((el) => <li key={el.key}><CurrentFilterValueButton handleFunc={handleRemovefilter}  value={el.key} title={el.value} sortType={el?.sortType}/></li>)}
        </ul>

        <div onClick={toggleDropdown} className={s.container}>
        <div ref={rootRef}>
        <p className={s.title}>Cортуй <IndicatorIcon className={clsx(s.indicator_icon, {[s.open]: isOpen}) }/></p>
        </div>
        {(
          <ul className={clsx(s.dropdown, {[s.open]: isOpen})}>
            {sortVariants?.map(({title, img, sort_by, ascending}) => (
              <li
                key={v4()}
              >
                <button className={s.item} onClick={handleClick}type='button' value={[sort_by, ascending]}>{icons[img]}{title}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      </div>
    )

};


export default SortMenu;