import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const baseUrl = `http://localhost:3000/productData.json`;

export const ProductDetails = ( { 
    id,
    name,
    type,
    imageUrl,
    description,
    alt, 
    pathname 
}) => {
    const detailsId  = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`${baseUrl}/:${detailsId.id}`)
        .then(res => res.json())
        .then(data => {
            setDetails(data.database);
        })

    }, [detailsId.id])

    return (
        <div>
            {details.id}
            {details.name}
            {details.description}
            {details.alt}
            {details.type}
        </div>
    );
}