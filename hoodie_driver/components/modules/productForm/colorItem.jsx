import s from './product_form.module.scss';

const ColorItem =({color})=> {
return <span className={s.icon} style={{background:color}}></span>
};

export default ColorItem;