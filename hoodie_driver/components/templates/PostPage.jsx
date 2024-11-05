import PostArticle from "../modules/postArticle/PostArticle";
import { getPostById } from "@/app/lib/firebase/blogAPI";

const PostPage =async({slug})=> {
const post = await getPostById(slug)

    return <PostArticle post={post}/>
}

export default PostPage;