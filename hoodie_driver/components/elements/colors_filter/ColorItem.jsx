import s from './colors_filter.module.scss';

const ColorItem =({color})=> {
   return <span className={s.color} style={{background:color}}></span>
};
export default ColorItem;