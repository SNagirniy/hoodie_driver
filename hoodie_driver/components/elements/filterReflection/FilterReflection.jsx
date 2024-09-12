'use client'

import s from './filter_reflection.module.scss';
import { useState,useEffect } from 'react';
import { useSearchParams,usePathname,useRouter } from 'next/navigation';
import CurrentFilterValueButton from '../currentFilterValueButton/CurrentFilterValueButton';

const FilterReflection=()=>{
    const [currentFilters, setCurrentFilters]=useState([]);
    
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

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
      };

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

  return (
  <ul className={s.current_filter_box}>
    {currentFilters?.map((el) => <li key={el.key}>
        <CurrentFilterValueButton 
        handleFunc={handleRemovefilter} 
        value={el.key} 
        title={el.value} 
        sortType={el?.sortType}/>
        </li>)}
  </ul>)
};

export default FilterReflection;