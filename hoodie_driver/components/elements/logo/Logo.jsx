import Link from "next/link";
import Image from "next/image";
import s from './logo.module.scss'
import Hoodie_driver from '../../../public/hoodie_driver.svg';
import clsx from "clsx";


const Logo = ({style})=> {
    return (
        <Link className={s.logo} href='/'>
            <Hoodie_driver 
            className={clsx(s.image, style)}
        alt="Hoodie driver logo image"/>
        <div className={s.text_container}>
            <p className={s.main_text}>Hoodie Driver</p>
            <span className={s.sec_text}>Перші в Україні</span>
        </div>
        </Link>
    )

};

export default Logo;