import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
const baseUrl = `http://localhost:3000/productData.json`;

export const ProductDetails = () => {
    const detailsId  = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            setDetails(data.database);
        })

    }, [detailsId.id])

    return (
        <div>
            {details.map(x => <Product key={x.id} {...x} />)}
        </div>
    );
}