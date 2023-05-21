import axios from "axios"
import { PostType } from "../../types/api"

type GetPostsType = () => Promise<PostType[]>;


export const getPosts: GetPostsType = async () => {
    const { data } = await axios.get<PostType[]>('https://jsonplaceholder.typicode.com/posts?_limit=30')
    return data
}