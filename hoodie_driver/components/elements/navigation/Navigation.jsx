'use client';
import { Link } from "@/navigation";
import { usePathname } from "@/navigation";
import { v4 } from "uuid";
import Image from "next/image";
import clsx from "clsx";
import fire_icon from '../../../public/fire_icon.svg?url';
import s from './navigation.module.scss';

const links = [{name: 'Магазин', href: '/store'}, {name:'Кастом', href: '/product', image: fire_icon},{name:'Про нас', href: '/about'},{name:'Блог', href: '/blog'},{name:'Контакти', href: '/contacts'}]


const Navigation =({onCloseMenu})=> {
const pathname = usePathname();


    return (
        <nav className={s.nav_container}>
            <ul className={s.nav_list}>
            {links.map(l => <li onClick={onCloseMenu} key={v4()}><Link  href={l.href} className={clsx(s.nav_item,{ [s.active]: pathname === l.href})}> 
            {l.image && <Image className={s.image}
        src={l.image}
        alt='l.name'/>}
            {l.name}</Link></li>)}</ul>
        </nav>
    )
}

export default Navigation;