import { useState, useEffect} from 'react'
import { useLocation, useParams } from 'react-router-dom';

import MoreInfo from "./MoreInfo";
const baseUrl = 'http://localhost:3000/productData.json';

export const Detail = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const location = useLocation();
    const { pathname } = location;
    console.log(pathname);
    
    useEffect(() => {
        fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            setData(data.database)
        })
    }, [id])

    return (
        <ul>
            {data.map(x => <li key={x.id}><MoreInfo {...x} /></li>)}
        </ul>
    );
}