import s from './main_button.module.scss';
import { Link } from '@/navigation';

const MainButton =({title,path, children, target ='_self'})=>{
 return ( <Link target={target} className={s.button} href={path}>{title}{children}</Link>)
};


export default MainButton