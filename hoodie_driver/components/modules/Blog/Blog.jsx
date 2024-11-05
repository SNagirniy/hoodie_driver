import BlogCard from '@/components/elements/blogCard/blogCard';
import s from './blog.module.scss';
import MainContainer from '@/components/layouts/MainCintainer';
import { getAllPosts } from '@/app/lib/firebase/blogAPI';


const Blog = async()=> {

    const articles = await getAllPosts();

    return(
        <section className={s.section}>
            <MainContainer>
                <ul className={s.list}>
                    {articles?.map(item => <li key={item.id}>
                        <BlogCard item={item}/>
                    </li>)}
                    
                </ul>
            </MainContainer>
        </section>
    )
}

export default Blog;