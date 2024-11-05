import PostPage from "@/components/templates/PostPage";

const Post = async ({params:{slug}})=> {
    return (
       <PostPage slug={slug}/>
    )
};

export default Post;