import {  useAppSelector } from "../../../shared/store";
import { postsSelector } from "../../../shared/store/posts";
import {  PostType } from "../../../types/api";
import Post from "../Post/Post";


const PostList = () => {
    const posts = useAppSelector(postsSelector)

    return ( 
        <>
        {posts.map((post: PostType) => (
            <Post {...post}/>
        ))}
        </>
     );
}
 
export default PostList;