'use client'
import s from './colors_filter.module.scss';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';



const ColorsFilter = ({color_map})=> {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = (e)=>{
        const id = e.currentTarget.id;
        const params = new URLSearchParams(searchParams);
        if (id) {
          params.set('color', id);
        } else {
          params.delete('color');
        }
        router.replace(`${pathname}?${params.toString()}`);
      }

    

    return (
        <ul className={s.list}>
            {color_map?.map(({title, color, id})=>{ return <li onClick={handleClick} id={id} key={id} className={s.item}><span className={s.color} style={{background:color}}></span> <p className={s.title}>{title}</p></li>})}
        </ul>
    )
};

export default ColorsFilter;