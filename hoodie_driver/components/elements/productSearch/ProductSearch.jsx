'use client'
import s from './product_search.module.scss';
import Search from '../../../public/search.svg';
import { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';


const ProductSearch = ()=> {
    const [searchValue, setSearchValue] = useState('');

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const handleChange = (e)=> {
        const value = e.currentTarget?.value;
        setSearchValue(value.trim())
    };



    const submit = (searchValue) => {
       
        const params = new URLSearchParams(searchParams);
       
        if (searchValue.length >= 3) {
         
          params.set('query', searchValue);
          params.set('page', 1)
        } else {
          params.delete('query');
        }
        router.replace(`${pathname}?${params.toString()}`, {scroll: false});
        
      };

      const debaunced = useDebouncedCallback(submit, 1000);
      useEffect(()=> debaunced(searchValue), [searchValue]);

    return (
<div className={s.input_box} role='search'>
<input onChange={handleChange} 
value={searchValue} 
className={s.input} 
autoComplete='false' 
min={3} 
required 
type="text"
placeholder={'Шукай...'}/>
<Search className={s.search_icon}/>
</div>

    )
};

export default ProductSearch;