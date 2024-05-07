import s from './main_button.module.scss';
import Link from 'next/link';

const MainButton =({title,path, children})=>{
 return ( <Link className={s.button} href={path}>{title}{children}</Link>)
};


export default MainButton