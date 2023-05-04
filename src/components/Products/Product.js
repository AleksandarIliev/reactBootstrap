import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Product({
    name,
    imageUrl,
    description,
    alt,
}) {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{alt}</Card.Text>
                <Card.Description>{description}</Card.Description>
                <Button variant="primary">Go back</Button>
                <Button variant="primary">Ask for info</Button>
            </Card.Body>
        </Card>
    );
}