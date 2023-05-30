import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Error } from '../Error/Error';

import MoreInfo from "./MoreInfo";
const baseUrl = 'http://localhost:3000/productData.json';

export const Detail = () => {
    const params = useParams();
    const [data, setData] = useState([]);
    let num = params[data.id];

    async function getDetails() {
        await fetch(baseUrl)
            .then(res => res.json())
            .then(res => {
                return setData(res.database.filter(x => x.id === num));
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        getDetails();
    }, [num])

    return ( 
        <>
        { data.length === 0 ? <Error /> : <MoreInfo data={data} /> }
        </>
    );
}