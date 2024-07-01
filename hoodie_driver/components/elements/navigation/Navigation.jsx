'use client';
import { Link } from "@/navigation";
import { usePathname } from "@/navigation";
import { v4 } from "uuid";
import Image from "next/image";
import clsx from "clsx";
import fire_icon from '../../../public/fire_icon.svg?url';
import s from './navigation.module.scss';
import { useTranslations } from "next-intl";


const links = [{name: 'shop', href: '/store/'}, {name:'custom', href: '/product', image: fire_icon},{name:'about', href: '/about'},{name:'blog', href: '/blog'},{name:'contacts', href: '/contacts'}]


const Navigation =({onCloseMenu})=> {
const pathname = usePathname();
const t = useTranslations("Home")


    return (
        <nav className={s.nav_container}>
            <ul className={s.nav_list}>
            {links.map(l => <li onClick={onCloseMenu} key={v4()}><Link  href={l.href} className={clsx(s.nav_item,{ [s.active]: pathname.includes(l.href) })}> 
            {l.image && <Image className={s.image}
        src={l.image}
        alt={t(`Navigation.${l.name}`)}/>}
            {t(`Navigation.${l.name}`)}</Link></li>)}</ul>
        </nav>
    )
}

export default Navigation;