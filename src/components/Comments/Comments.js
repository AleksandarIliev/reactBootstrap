import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';
import styles from './Comments.module.css'

export const Comments = () => {
    const navigate = useNavigate();
    return (
        <CardGroup>
            <Card>
                <Card.Body>
                    <Card.Title>Comments:</Card.Title>
                    <Card.Text>Some comments here</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className={styles['btn']} onClick={() => navigate(-1)} variant="light">Edit</Button>
                    <Button className={styles['btn']} onClick={() => navigate('/contact')} variant="light">Add comment</Button>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}