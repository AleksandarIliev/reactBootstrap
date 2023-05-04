// import React, { useState, useEffect } from 'react';
import Product from './Product';

//1'51''

export default function ProductDetails ({ data }) {
    // const firstProduct = datas[0];

    // const [data, setData] = useState([]);

    // const getData = () => {
    //     fetch('./productData.json'
    //     ,{
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     }
    //     )
    //         .then(function (res) {
    //             console.log(res)
    //             return res.json();
    //         })
    //         .then(function (myJson) {
    //             console.log(myJson);
    //             setData(myJson)
    //         });
    // }

    // useEffect(() => {
    //     getData()
    // }, [])

    return (
        <div>
            <ul>
                {data.map(x => <li key={x.id}><Product {...x} /></li>)}
            </ul>
        </div>
    );
}