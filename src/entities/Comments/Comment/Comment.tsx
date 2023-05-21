import Card from 'react-bootstrap/Card';
import { CommentsType } from '../../../types/api';
import { FC } from 'react';

const Comment:FC<CommentsType> = (props) => {
    const { body, id, email } = props

    return (
            <Card border="primary my-4" key={id}>
                <Card.Header>
                    {email}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {body}
                    </Card.Text>
                </Card.Body>
            </Card>
     );
}
 
export default Comment;