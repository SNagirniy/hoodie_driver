'use client'
import s from './paginations_buttons.module.scss';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';


const PaginationButtons =({currentPage,totalPages})=> {

const pagesArr = Array.from(Array(totalPages), (_, i) => i+1);

const searchParams = useSearchParams();
const pathname = usePathname();
const router = useRouter();

const handleClick = (e)=>{
    const pageNum = e.currentTarget.value;
    const params = new URLSearchParams(searchParams);
    if (pageNum) {
      params.set('page', pageNum);
    } else {
      params.delete('page');
    }
    router.replace(`${pathname}?${params.toString()}`,{scroll: false});
  }



return (
    <ul className={s.btn_list}>
        {pagesArr?.map((num)=> <li key={num} className={s.btn_item}>
            <button onClick={handleClick} value={num} className={ clsx(s.btn, {[s.active]: currentPage === num.toString()})} type="button">{num}</button>
        </li>)}
    </ul>
)



}


export default PaginationButtons;