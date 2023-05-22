import axios from "axios"
import { UserType } from "../../types/api"

type GetUserType = (userId: UserType["id"]) => Promise<UserType>;


export const getUser: GetUserType = async (userId) => {
    const { data } = await axios.get<UserType>(`https://jsonplaceholder.typicode.com/users/${userId}`)
    return data
}