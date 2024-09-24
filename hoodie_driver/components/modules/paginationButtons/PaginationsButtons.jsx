'use client'
import s from './paginations_buttons.module.scss';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import ReactPaginate from 'react-paginate';
import IndicatorIcon from '../../../public/indicator_icon.svg';
import clsx from 'clsx';

const NavBtn =({type})=>{
  if(type === "prev") {
  
    return (
      <p className={s.navigation_btn}>
        <IndicatorIcon className={s.indicator_icon}/>
        <span>попередня</span>
      </p>
    )
  }
  if(type==='next'){
  
    return (
      <p className={s.navigation_btn}>
        <span>наступна</span>
        <IndicatorIcon className={clsx(s.indicator_icon, s.next)}/>
        
      </p>
    )
  }

}

const PaginationButtons =({currentPage,totalPages})=> {

const pagesArr = Array.from(Array(totalPages), (_, i) => i+1);

const searchParams = useSearchParams();
const pathname = usePathname();
const router = useRouter();

const handleClick = (e)=>{

  const index = e?.selected;
    const pageNum = pagesArr[index]
    const params = new URLSearchParams(searchParams);
    if (pageNum) {
      params.set('page', pageNum);
    } else {
      params.delete('page');
    }
    router.replace(`${pathname}?${params.toString()}`,{scroll: false});
  }


return (
  <ReactPaginate
  breakLabel="..."
  nextLabel={<NavBtn type={'next'}/>}
  onPageChange={handleClick}
  pageRangeDisplayed={5}
  pageCount={totalPages}
  previousLabel={<NavBtn type={'prev'} />}
  renderOnZeroPageCount={null}

  containerClassName={s.btn_list}
  pageClassName={s.btn_item}
  pageLinkClassName={s.btn}
  activeLinkClassName={s.active}
  previousClassName={s.navigation_item}
  nextClassName={clsx(s.navigation_item, s.next)}
  disabledClassName={s.disabled}
/>
)
};


/*   <ul className={s.btn_list}>
        {pagesArr?.map((num)=> <li key={num} className={s.btn_item}>
            <button onClick={handleClick} value={num} className={ clsx(s.btn, {[s.active]: currentPage === num.toString()})} type="button">{num}</button>
        </li>)}
    </ul> */


export default PaginationButtons;