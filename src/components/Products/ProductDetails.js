import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const baseUrl = 'productData.json';

export const ProductDetail = () => {
    const [data, setData] = useState(data);

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(result => {
                setDetail(Object.values(result));
            })
    }, []);

    return (
        <div>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={detail.imageUrl} />
                <Card.Body>
                    <Card.Title>{detail.name}</Card.Title>
                    <Card.Text>{detail.alt}</Card.Text>
                    <Button variant="primary">Go back</Button>
                    <Button variant="primary">Ask for info</Button>
                </Card.Body>
            </Card>
        </div>
    );
}