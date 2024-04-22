import Link from "next/link";
import Image from "next/image";
import s from './logo.module.scss'
import hoodie_driver from '../../../public/hoodie_driver.svg';


const Logo = ()=> {
    return (
        <Link className={s.logo} href='/'>
            <Image 
            className={s.image}
        src={hoodie_driver}
        alt="Hoodie driver logo image"/>
        <div className={s.text_container}>
            <p className={s.main_text}>Hoodie Driver</p>
            <span className={s.sec_text}>Перші в Україні</span>
        </div>
        </Link>
    )

};

export default Logo;