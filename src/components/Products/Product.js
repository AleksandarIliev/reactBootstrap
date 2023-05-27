import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Product.module.css';

export default function Product({
    id,
    name,
    imageUrl,
    description
}) {
    const navigate = useNavigate();

    return (
        <CardGroup className={styles['cardGroup']} >
            <Card>
                <Card.Img variant="top" src={imageUrl} className={styles['imageStyle']} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className={styles['btn']} onClick={() => navigate(`${id}`)} variant="light">Details</Button>
                    {/* <Link to={"/contact"}>Contact us</Link> */}
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}