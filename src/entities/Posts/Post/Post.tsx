import avatar from '../../../shared/assets/icons/user-32-32.png'
import { commentsActions } from "../../../shared/store/comments";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CommentsList from "../../../entities/Comments/CommentsList/CommentsList";
import Button from "react-bootstrap/esm/Button";
import { useAppDispatch } from '../../../shared/store';
import { CommentsType, PostType } from '../../../types/api';
import { FC } from 'react';

const Post:FC<PostType> = ( props ) => {
    const { id, body, title } = props
    const dispatch = useAppDispatch()

    const handleShowComments = (postId: CommentsType['postId']) => {
        dispatch(commentsActions.request({postId}))
    }
    
    return ( 
        <Row key={id} className="my-5 justify-content-md-center">
        <Col>
            <Card border="primary">
                <Card.Header className="bg-primary">
                    <img src={avatar} alt="avatar"/>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleShowComments(id)}>Комментарии</Button>
                    <CommentsList />
                </Card.Body>
            </Card>
        </Col>
    </Row>
     );
}
 
export default Post;