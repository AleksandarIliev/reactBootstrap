import { useParams } from "react-router-dom";
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

// import styles from './Detail.module.css';

import { useEffect, useState } from "react";
// const baseUrl = `http://localhost:3000/productData.json`;

export const Detail = ({ 
    id,
    name, 
    type,
    description,
    imageUrl,
    alt,
}) => {
    const params = useParams();
    const [detail, setDetail] = useState({});
    console.log(params.id);

    useEffect(() => {
        fetch(`http://localhost:3000/productData.json`)
            .then(res => res.json())
            .then(data => {
                setDetail(data.database);
            })
    }, [params.id])

    return (
        <>
            <p>{detail.id}</p>
            <p>{name}</p>
            <p>{type}</p>
            <p>{description}</p>
            <p>{imageUrl}</p>
            <p>{alt}</p>
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