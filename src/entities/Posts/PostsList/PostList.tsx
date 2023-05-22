import {  PostType } from "../../../types/api";
import Post from "../Post/Post";


interface PostListProps {
    posts: PostType[]
}

const PostList = ({posts}:PostListProps) => {
    return ( 
            <>
                {posts.map((post) => (
                    <Post {...post} key={post.id}/>
                ))}
            </>
    );
}
 
export default PostList;