import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../shared/store";
import { useEffect } from "react";
import { userActions, userSelector } from "../../../shared/store/user";
import Card from 'react-bootstrap/Card';
import photo from '../../../shared/assets/icons/avatar.jpg'
import { postsActions, postsSelector } from "../../../shared/store/posts";
import PostList from "../../../entities/Posts/PostsList/PostList";
import Button from "react-bootstrap/esm/Button";

const UserPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const { userId } = useParams();
    const user = useAppSelector(userSelector)
    const posts = useAppSelector(postsSelector)

    if (posts.length === 0) {
        dispatch(postsActions.requestByUserId({userId}))
    }
    
    const userPosts = posts.filter((post) => post.userId === Number(userId))

    useEffect(() => {
        dispatch(userActions.request({userId}))
    }, [dispatch, userId])

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <Button 
            onClick={()=> navigate('/')}
            className="my-4"
            >
                Назад
            </Button>
            <Card style={{ width: '17rem' }}>
                <Card.Img variant="top" src={photo} height={'200px'}/>
                <Card.Body>
                    <Card.Title>{user?.name}</Card.Title>
                    <Card.Text>
                        E-mail: {user?.email}
                    </Card.Text>
                    <Card.Text>
                        Город: {user?.address.city}
                    </Card.Text>
                    <Card.Text>
                        Компания: {user?.company.name}
                    </Card.Text>
                </Card.Body>
            </Card>
            <PostList posts={userPosts}/>
        </>
    )
};

export default UserPage;
