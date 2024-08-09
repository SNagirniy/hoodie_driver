'use client';
import { Link } from "@/navigation";
import { usePathname } from "@/navigation";
import { v4 } from "uuid";
import clsx from "clsx";
import s from './navigation.module.scss';
import { useTranslations } from "next-intl";
import StoreItem from "./StoreItem/StoreItem";



const links = [{name:'blog', href: '/blog'},{name:'delivery', href: '/order'},{name:'about', href: '/about'},{name:'contacts', href: '/contacts'}]


const Navigation =({onCloseMenu, categories})=> {
const pathname = usePathname();
const t = useTranslations("Home")


    return (
        <nav className={s.nav_container}>
            <ul className={s.nav_list}>
            <li key={v4()}><StoreItem closeMenuFunc={onCloseMenu} categories={categories}/></li>
            {links.map(l => <li onClick={onCloseMenu} key={v4()}>
                <Link  href={l.href} className={clsx(s.nav_item,{ [s.active]: pathname.includes(l.href) })}> 
            {t(`Navigation.${l.name}`)}</Link></li>)}</ul>
        </nav>
    )
}

export default Navigation;