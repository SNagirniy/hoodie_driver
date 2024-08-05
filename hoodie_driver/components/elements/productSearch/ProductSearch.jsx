'use client'
import s from './product_search.module.scss';
import Search from '../../../public/search.svg';
import { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import isId from '@/utils/productIdCheck';



const ProductSearch = ()=> {
    const [searchValue, setSearchValue] = useState('');

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const handleChange = (e)=> {
        const value = e.currentTarget?.value;
        setSearchValue(value.trim())
    };

    const removeAllParams = (params)=> {
    for (const [key,value] of params) {
      params.delete(key)};
        return params
      };
   


    const submit = (searchValue) => {
       
        const params = new URLSearchParams(searchParams);

        const isProductId = isId(searchValue.toUpperCase());
        if (searchValue.length >= 3 && isProductId) {
          removeAllParams(params)
          params.set('q', searchValue.toUpperCase());
          params.set('page', 1)
        } else if(searchValue.length >= 3 && !isProductId){
          params.set('q', searchValue.toLowerCase());
          params.set('page', 1)
        }else{
          params.delete('q')
        }
        router.replace(`${pathname}?${params.toString()}`, {scroll: false});
        
      };

      const debaunced = useDebouncedCallback(submit, 1000);
      useEffect(()=> debaunced(searchValue), [searchValue]);

      const reset = (params)=> {
      const isExist = params.get('q');
       if(!isExist) {setSearchValue('')}
      };
      useEffect(()=> reset(searchParams), [searchParams])

    return (
<div className={s.input_box} role='search'>
<input onChange={handleChange} 
value={searchValue} 
className={s.input} 
autoComplete='false' 
min={3}
max={20}
required 
type="text"
placeholder={'Шукай...'}/>
<Search className={s.search_icon}/>
</div>

    )
};

export default ProductSearch;