import { useAppSelector } from "../../../shared/store";
import Spinner from "react-bootstrap/esm/Spinner";
import { commentsSelector, isLoadingCommentsSelector } from "../../../shared/store/comments";
import Comment from "../Comment/Comment";

const CommentsList = () => {
    const comments = useAppSelector(commentsSelector)
    const isLoadingComments = useAppSelector(isLoadingCommentsSelector)

    return (
    <>
            {isLoadingComments 
                ? 
                <Spinner animation="grow" variant='info'/> 
                : 
                comments.map(comment => <Comment {...comment}/> )}
    </>
    )
     
};
 
export default CommentsList;