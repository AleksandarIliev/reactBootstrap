import { useState, useEffect } from 'react';

import { Header } from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
// import TodoList from './components/TodoList/TodoList';
import ControlledCarousel from './components/RotatePhoto/RotatePhoto';
// import ProductDetail from './components/Products/ProductDetails';
import  { data }  from './components/Products/productData.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app

// const baseUrl = 'http://localhost:3030/jsonstore/todos';

function App() {
    // const [todos, setTodos] = useState([]);

    // useEffect(() => {
    //     fetch(baseUrl)
    //     .then(res => res.json())
    //     .then(result => {
    //         setTodos(Object.values(result));
    //     })
    // }, []);

    const [data, setData] = useState([]);

    const getData = () => {
        fetch('productData.json', {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json' 
            }
        }
        )
        .then(function(res){
            console.log(res)
            return res.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
        });
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="App">
            <Header />
            <ControlledCarousel />
            {/* <TodoList todos={todos} /> */}
            {
                data && data.lenght > 0 && data.map((x) => 
                <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={x.imageUrl} />
                <Card.Body>
                    <Card.Title>{x.name}</Card.Title>
                    <Card.Text>{x.alt}</Card.Text>
                    <Card.Id>{x.id}</Card.Id>
                    <Button variant="primary">Go back</Button>
                    <Button variant="primary">Ask for info</Button>
                </Card.Body>
            </Card>)
            }
        </div>
    );
}

export default App;
