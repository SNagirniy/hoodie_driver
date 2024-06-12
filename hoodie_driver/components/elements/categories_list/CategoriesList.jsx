import s from './categories_list.module.scss'
import { Link } from '@/navigation';
import { v4 } from 'uuid';

const CategoriesList = ({links})=> {

    return (
       
            <ul className={s.list}>
            {links.map(({url, title})=> <li key={v4()}>
                <Link className={s.link} href={url}>{title}</Link>
            </li>)}

        </ul>
      
    )
};


export default CategoriesList;