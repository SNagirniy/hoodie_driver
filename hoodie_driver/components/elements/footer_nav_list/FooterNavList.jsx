'use client'
import s from './footernavlist.module.scss';
import { Link } from '@/navigation';
import { v4 } from 'uuid';
import { useSearchParams } from 'next/navigation';
import { useRouter } from '@/navigation';



const FooterNavList = ({links, title,closeMenuFunc})=> {
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleClick = (e)=>{
        const id = e.currentTarget.id;
        if(!id){return}
        const params = new URLSearchParams(searchParams);
        if (id) {
          params.set('category', id);
          params.set('page', '1')
        } else {
          params.delete('category');
        }
        router.replace(`/store/catalogue?${params.toString()}`);
       closeMenuFunc && closeMenuFunc();
      }
    return (
        <div className={s.container} >
            <h4 className={s.list_title} >{title}</h4>
            <ul className={s.list}>
            {links.map(({url,title,id})=> <li onClick ={handleClick} id={id} key={v4()}>
                <Link href={url} className={s.link}>{title}</Link>
            </li>)}

        </ul>
        </div>
      
    )
};


export default FooterNavList;