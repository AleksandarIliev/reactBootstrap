import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';

import MoreInfo from "./MoreInfo";
const baseUrl = 'http://localhost:3000/productData.json';

export const Detail = () => {
    const params = useParams();
    const [data, setData] = useState([]);
    const location = useLocation();
    const { pathname } = location;
    console.log(pathname);
    console.log(params[data.id]);

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                setData(data.database);
            })
    }, [params[data.id]])

    const filtred = data.filter(x => {
        return x.id === params[data.id];
    })
    
    return (
        <ul>
            {/* {data.map(x => <li key={x.id}><MoreInfo data={(data) => {data.filter(data => data[params[data.id]])}} /></li>)} */}
            {/* <li>
                <MoreInfo data={() => {data.filter(data => data[params[data.id]])}} />
            </li> */}
            {/* {data.filter(data => data[params[data.id]])} */}
            <li><MoreInfo filtred={filtred} /></li>
        </ul>
    );
}