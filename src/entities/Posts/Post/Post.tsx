import avatar from '../../../shared/assets/icons/user-32-32.png'
import { commentsActions, commentsSelector } from "../../../shared/store/comments";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CommentsList from "../../../entities/Comments/CommentsList/CommentsList";
import Button from "react-bootstrap/esm/Button";
import { useAppDispatch, useAppSelector } from '../../../shared/store';
import { CommentsType, PostType } from '../../../types/api';
import { FC, useState } from 'react';
import Spinner from "react-bootstrap/esm/Spinner";
import Collapse from 'react-bootstrap/Collapse';
import { Link } from 'react-router-dom';



const Post:FC<PostType> = ( props ) => {
    const { id, body, title, userId } = props
    const [fakeLoading, setFakeLoading] = useState<boolean>(false)
    const [open, setOpen] = useState(false);

    const dispatch = useAppDispatch()
    const comments = useAppSelector(commentsSelector)



    const handleShowComments = (postId: CommentsType['postId']) => {
        setOpen(!open)
        if (comments.findIndex((comment) =>  comment.postId === postId) === - 1) {
            setFakeLoading(true)
            dispatch(commentsActions.request({postId}))
            setTimeout(() => {
                setFakeLoading(false)
            }, 1500)
        }
    }

    const filtredComments = comments.filter((comment) => {
        return comment.postId === id
    })



    return ( 
        <Row key={id} className="my-5 justify-content-md-center">
            <Col>
                <Card border="primary">
                    <Card.Header className="bg-primary">
                        <Link to={`users/${userId}`}>
                            <img src={avatar} alt="avatar"/>
                        </Link>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {body}
                        </Card.Text>
                        <Button 
                            variant="primary" 
                            onClick={() => handleShowComments(id)}
                            aria-expanded={open}
                        >
                            Комментарии
                        </Button>
                        {
                            fakeLoading ? 
                                <div className="py-4 px-4">
                                    <Spinner animation="border" variant='info'/> 
                                </div>
                            :
                            <Collapse in={open}>
                                <div>
                                    <CommentsList filtredComments={filtredComments}/>
                                </div>
                             </Collapse>
                        }
                    </Card.Body>
                </Card>
            </Col>
        </Row>
     );
}
 
export default Post;