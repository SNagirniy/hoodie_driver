
import s from './colors_filter.module.scss';

const IconItem =({icon, icon_title})=> {
   return (
    <span className={s.icon}>
        <img src={icon} alt={icon_title}/>
    </span>)
};

export default IconItem;