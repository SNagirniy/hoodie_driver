'use client'

import s from './categories_list.module.scss';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { v4 } from 'uuid';

const CategoriesList = ({links})=> {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();


    const handleClick = (e)=>{
        const id = e.currentTarget.id;
        const params = new URLSearchParams(searchParams);
        if (id) {
          params.set('category', id);
          params.set('page', 1);
        } else {
          params.delete('category');
          params.delete('page');
        }
        router.replace(`${pathname}?${params.toString()}`);
      }

    return (
       
            <ul className={s.list}>
            {links.map(({slug, title})=> <li onClick={handleClick} id={slug} key={v4()}>
                <p className={s.link}>{title}</p>
            </li>)}
        </ul>
      
    )
};


export default CategoriesList;