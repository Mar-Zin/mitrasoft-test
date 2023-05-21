import axios from "axios"
import { CommentsType } from "../../types/api"

type GetCommentsType = (postId: CommentsType["postId"]) => Promise<CommentsType[]>;


export const getComments: GetCommentsType = async (postId) => {
    const { data } = await axios.get<CommentsType[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    return data
}