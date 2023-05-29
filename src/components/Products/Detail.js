import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';

import MoreInfo from "./MoreInfo";
const baseUrl = 'http://localhost:3000/productData.json';

export const Detail = () => {
    const params = useParams();
    const [data, setData] = useState([]);
    const location = useLocation();
    const { pathname } = location;
    let num = params[data.id];

    console.log(pathname);
    console.log(num);

    // useEffect(() => {
    //     fetch(baseUrl)
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data.database.filter(x => {
    //                 return x.id === num;
    //             }));
    //         })
    // }, [num])

    async function getDetails() {
        let res = await fetch(baseUrl, {
            "method": "GET",
            "Content-Type": "application/json",
        });
        let dataDetail = await res.json();
        setData(dataDetail = dataDetail.database.filter((x => x.id === num)));
    }
    
    useEffect(() => {
        getDetails();
    }, [num])

    console.log(data);

    // const filtred = data.filter(x => {
    //     return x.id === params[data.id];
    // })

    return (
        <MoreInfo data={data} />
    );
}