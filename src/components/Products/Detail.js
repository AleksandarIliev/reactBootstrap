import { useParams } from "react-router-dom";
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

// import styles from './Detail.module.css';

import { useEffect, useState } from "react";
const baseUrl = `http://localhost:3000/productData.json`;

export const Detail = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() => {
        fetch(`${baseUrl}/${id}`)
        .then(res => res.json())
        .then(data => {
            setDetail(data.database)
        })
    }, [id])

    return (
        <>
        <p>{detail.name}</p>
        <p>{detail.type}</p>
        <p>{detail.alt}</p>
        <p>{detail.description}</p>
        </>

        // <CardGroup className={styles['cardGroup']} >
        //     <Card>
        //         <Card.Img variant="top" src={imageUrl} className={styles['imageStyle']} />
        //         <Card.Body>
        //             <Card.Title>{name}</Card.Title>
        //             <Card.Text>{description}</Card.Text>
        //             <Card.Text>{alt}</Card.Text>
        //             <Card.Text>{type}</Card.Text>
        //         </Card.Body>
        //     </Card>
        // </CardGroup>
    );
}