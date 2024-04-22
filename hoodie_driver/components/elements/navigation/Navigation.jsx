'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";
import fire_icon from '../../../public/fire_icon.svg';
import s from './navigation.module.scss';

const links = [{name: 'Магазин', href: '/store'}, {name:'Кастом', href: '/product', image: fire_icon},{name:'Про нас', href: '/about'},{name:'Блог', href: '/blog'},{name:'Контакти', href: '/contacts'}]


const Navigation =()=> {
const pathname = usePathname();

    return (
        <nav className={s.nav_container}>
            {links.map(l => <Link key={l.name} href={l.href} className={clsx(s.nav_item,{ [s.active]: pathname === l.href})}> 
            {l.image && <Image className={s.image}
        src={l.image}
        alt='l.name'/>}
            {l.name}</Link>)}
        </nav>
    )
}

export default Navigation;