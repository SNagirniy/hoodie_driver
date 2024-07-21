'use client'

import s from './reset_link.module.scss';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const ResetLink = ({param})=> {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = ()=>{
        const params = new URLSearchParams(searchParams);
          if(param === 'category'){
              for (const key of searchParams.keys()) {
              params.delete(key);
        }
        } else{
          params.delete(param);
          params.delete('sort_by');
          params.delete('ascending');}
       
        params.set('page', 1);
        router.replace(`${pathname}?${params.toString()}`,{scroll: false});
      }


    return (
        <button type='button' onClick={handleClick} className={s.reset} >скинути</button>
    )

}

export default ResetLink;
