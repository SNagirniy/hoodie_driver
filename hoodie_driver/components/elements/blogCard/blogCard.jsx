import s from './blog_card.module.scss';
import { Link } from '@/navigation';
import { getLocale } from 'next-intl/server';


const BlogCard = async({item})=> {

    const locale = await getLocale();
  
    const {id, title, date, imageURL} = item;

   return (
    <article className={s.card}>
    <Link href={`/blog/${id}`} className={s.link}>
     <div className={s.thumb}>
       {imageURL && <img src={imageURL} alt={title[locale]} />}
    </div>
    <div className={s.info}>
    <h3>{title[locale]}</h3>
    <p>{date}</p>
    </div>
    
    </Link>
</article>
   )
};


export default BlogCard;