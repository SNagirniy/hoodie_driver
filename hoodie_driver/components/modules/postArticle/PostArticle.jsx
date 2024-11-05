import s from './post_article.module.scss';
import MainContainer from "@/components/layouts/MainCintainer";
import { getLocale } from "next-intl/server";
import MainButton from '@/components/elements/mainButton/Main_Button';

const PostArticle = async({post}) => {
    const locale = await getLocale();
const {date, text, imageURL, title} = post;
    return(
        <article className={s.article}>
            <MainContainer>
               <div className={s.btn_wrapper}><MainButton title={"Повернутись"} path={'/blog'}/></div>
                <p className={s.date}>{date}</p>

               {imageURL && <div className={s.thumb}>
                    <img src={imageURL} alt={title[locale]} />
                </div>}
                <div dangerouslySetInnerHTML={{ __html: text[locale] }} />
            </MainContainer>
        </article>
    )
};


export default PostArticle;