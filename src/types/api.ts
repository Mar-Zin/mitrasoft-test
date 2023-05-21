export type PostType = {
    body: string
    id: number
    title: number
    userId: string 
}

export type CommentsType = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}