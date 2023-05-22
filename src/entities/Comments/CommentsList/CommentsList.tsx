import { CommentsType } from "../../../types/api";
import Comment from "../Comment/Comment";

interface CommentsListType {
    filtredComments: CommentsType[]
}

const CommentsList = ({filtredComments} : CommentsListType) => {
    return  <>
    {filtredComments.map((comment:CommentsType) => <Comment {...comment} key={comment.id}/>)}
    </>
};
 
export default CommentsList;