import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';

import styles from './Product.module.css';

export default function MoreInfo( {data} ) {
    data = data[0];
    // console.log(data);
    const navigate = useNavigate();

    return (
        <CardGroup className={styles['cardGroup']} >
        <Card>
            <Card.Img variant="top" src={`/${data.imageUrl}`} className={styles['imageStyle']} />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
                <Card.Text>{data.id}</Card.Text>
                <Card.Text>{data.alt}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button className={styles['btn']} onClick={() => navigate(-1)} variant="light">Go back</Button>
                <Button className={styles['btn']} onClick={() => navigate('/contact')} variant="light">Contact us</Button>
            </Card.Footer>
        </Card>
    </CardGroup>
    );
}