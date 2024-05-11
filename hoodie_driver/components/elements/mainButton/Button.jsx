import s from './main_button.module.scss';


const Button =({title, children, type = 'button', action, disabled})=>{
 return ( <button disabled={disabled} onClick={action} type={type} className={s.button}>{title}{children}</button>)
};


export default Button;