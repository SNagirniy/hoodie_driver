'use client'
import s from './colors_filter.module.scss';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import ColorItem from './ColorItem';
import IconItem from './IconItem';
import { useState } from 'react';
import clsx from 'clsx';





const ColorsFilter = ({color_map})=> {
  const [isColorFilterOpen, setIsColorFilterOpen]= useState(false);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const isQExist = ()=> {return searchParams.get('q')}

    const openColorFilter=()=> {
      setIsColorFilterOpen(!isColorFilterOpen)
    }

    const handleClick = (e)=>{
        const id = e.currentTarget.id;
        const params = new URLSearchParams(searchParams);
        if(isQExist()) {return}
        if (id) {
          params.set('color', id);
          params.set('page', 1)
        } else {
          params.delete('color');
          params.delete('page');
        }
        router.replace(`${pathname}?${params.toString()}`,{scroll: false});
      }

      

      const renderedColors = isColorFilterOpen? color_map : color_map.slice(0,11);

    return (
        <ul className={s.list}>
            {renderedColors?.map(({title, color, id,icon})=>{ return <li onClick={handleClick} id={id} key={id} className={clsx(s.item, {[s.disabled]: isQExist()})}>{color? <ColorItem color={color}/> : <IconItem icon={icon} icon_title={title}/>}<p className={s.title}>{title}</p></li>})}
            <li  key ={'other'} onClick={openColorFilter} className={s.item}><IconItem icon={'/other_icon.png'} icon_title={'інші'}/>  <p className={s.title}>{isColorFilterOpen? 'менше' : "інші"}</p></li>
        </ul>
    )
};

export default ColorsFilter;