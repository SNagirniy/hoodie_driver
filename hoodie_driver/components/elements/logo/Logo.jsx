import Link from "next/link";
import s from './logo.module.scss'
import Hoodie_driver from '../../../public/hoodie_driver.svg';
import clsx from "clsx";


const Logo = ({is_footer})=> {
    return (
        <Link className={clsx(s.logo,{[s.footer] : is_footer})} href='/'>
            <Hoodie_driver 
            className={clsx(s.image, {[s.footer] : is_footer})}
        alt="Hoodie driver logo image"/>
        <div className={s.text_container}>
            <p className={clsx(s.main_text,{[s.footer] : is_footer})}>Hoodie Driver</p>
            <span className={clsx(s.sec_text,{[s.footer] : is_footer})}>Перші в Україні</span>
        </div>
        </Link>
    )

};

export default Logo;