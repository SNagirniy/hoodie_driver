import s from './product_form.module.scss';

const IconItem =({icon, title})=> {
return <span><img className={s.icon} src={icon} alt={title}/></span>
};

export default IconItem;