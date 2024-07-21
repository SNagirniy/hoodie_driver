import s from './main_button.module.scss';


const Button =({value,title, children, type = 'button', action, disabled})=>{
 return ( <button value={value} disabled={disabled} onClick={action} type={type} className={s.button}><span>{title}</span>{children}</button>)
};


export default Button;