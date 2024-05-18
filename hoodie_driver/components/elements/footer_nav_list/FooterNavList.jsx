import s from './footernavlist.module.scss';
import { Link } from '@/navigation';
import { v4 } from 'uuid';

const FooterNavList = ({links, title})=> {

    return (
        <div className={s.container} >
            <h4 className={s.list_title} >{title}</h4>
            <ul className={s.list}>
            {links.map(({url, title})=> <li key={v4()}>
                <Link className={s.link} href={url}>{title}</Link>
            </li>)}

        </ul>
        </div>
      
    )
};


export default FooterNavList;