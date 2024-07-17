import s from './current_filter_value_btn.module.scss';
import Close from '../../../public/close.svg';
import Sort_down from '../../../public/sort_down.svg';
import Sort_up from '../../../public/sort_up.svg';

const icons = {
    desc: <Sort_up className={s.icon}/>,
    asc: <Sort_down className={s.icon}/>
  }


const CurrentFilterValueButton=({handleFunc, value, title,sortType})=>{
    return <button onClick={handleFunc} value={value} type='button' className={s.button}>{sortType && icons[sortType]}{title}<Close className={s.icon}/></button>
};


export default CurrentFilterValueButton;