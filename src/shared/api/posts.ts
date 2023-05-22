import axios from "axios"
import { PostType } from "../../types/api"

type GetPostsType = () => Promise<PostType[]>;
type GetPostsByUserIdType = (userId: number) => Promise<PostType[]>;



export const getPosts: GetPostsType = async () => {
    const { data } = await axios.get<PostType[]>('https://jsonplaceholder.typicode.com/posts?_limit=30')
    return data
}

export const getPostsByUserId: GetPostsByUserIdType = async (userId) => {
    const { data } = await axios.get<PostType[]>(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    return data
}