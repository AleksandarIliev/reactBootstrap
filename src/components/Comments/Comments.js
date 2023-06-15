import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';
import styles from './Comments.module.css'

import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

export const Comments = () => {
    const { isAuthenticated, userEmail } = useContext(AuthContext);

    const navigate = useNavigate();
    return (
        <>
        { isAuthenticated &&
        <CardGroup>
            <Card>
                <Card.Body>
                    <Card.Title>{userEmail}</Card.Title>
                    <Card.Text>Write your comment here</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className={styles['btn']} onClick={() => navigate('/edit')} variant="light">Edit</Button>
                    <Button className={styles['btn']} onClick={() => navigate('./addComment')} variant="light">Add comment</Button>
                    <Button className={styles['btn']} onClick={() => navigate(-1)} variant="light">Cancel</Button>
                </Card.Footer>
            </Card>
        </CardGroup>
        }
        </>
    );
}