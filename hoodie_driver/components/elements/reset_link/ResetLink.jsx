'use client'
import { Link } from '@/navigation';
import s from './reset_link.module.scss';
import { usePathname } from '@/navigation';

const ResetLink = ({path})=> {

    const pathname = usePathname();
    const curentPath = path? path : pathname;


    return (
        <Link className={s.reset}  href={curentPath}>скинути</Link>
    )

}

export default ResetLink;
