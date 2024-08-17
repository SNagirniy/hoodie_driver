'use client'

import s from './categories_list.module.scss';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import isId from '@/utils/productIdCheck';
import clsx from 'clsx';
import { v4 } from 'uuid';

const CategoriesList = ({links,onCloseFilterMenu})=> {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const isQID = ()=> {const q = searchParams.get('q'); return isId(q)}

    const handleClick = (e)=>{
        const id = e.currentTarget.id;
        const params = new URLSearchParams(searchParams);
      if(isQID()){return}
        if (id) {
          params.set('category', id);
          params.set('page', 1);
        } else {
          params.delete('category');
          params.delete('page');
        }
        router.replace(`${pathname}?${params.toString()}`,{scroll: false});
        onCloseFilterMenu && onCloseFilterMenu()
      }

    return (
       
            <ul className={s.list}>
            {links.map(({slug, title})=> <li onClick={handleClick} id={slug} key={v4()}>
                <p className={clsx(s.link, {[s.disabled]: isQID()})}>{title}</p>
            </li>)}
        </ul>
      
    )
};


export default CategoriesList;