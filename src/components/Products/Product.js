// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';

import styles from './Product.module.css';

export default function Product({
    id,
    name,
    imageUrl,
    description,
    alt,
}) {
    return (
        // <Card style={{ width: '20rem' }}>
        //     <Card.Img style={{ height:'20rem' }} variant="top" src={imageUrl} />
        //     <Card.Body>
        //         <Card.Title>{name}</Card.Title>
        //         <Card.Text>{alt}</Card.Text>
        //         <Card.Text>{description}</Card.Text>
        //         <Button variant="primary">Detail</Button>
        //         <Button variant="primary">Ask for product</Button>
        //     </Card.Body>
        // </Card>

        // <Container>
        //     <Row xs={1} md={1} className={styles['g-4']}>
        //         {Array.from({ length: 1 }).map((_, idx) => (
        //             <Col>
        //                 <Card>
        //                     <Card.Img variant="top" src={imageUrl} alt={alt} className={styles['imageStyle']} />
        //                     <Card.Body>
        //                         <Card.Title>{name}</Card.Title>
        //                         <Card.Text>{description}</Card.Text>
        //                         <Button variant="light">Detail</Button>
        //                         <Button variant="light">For questions</Button>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //         ))}
        //     </Row>
        // </Container>

        <CardGroup className={styles['cardGroup']} >
            <Card>
                <Card.Img variant="top" src={imageUrl} className={styles['imageStyle']} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className={styles['btn']} variant="light">Details</Button>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}