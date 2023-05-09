import { Header } from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
// import TodoList from './components/TodoList/TodoList';
import ControlledCarousel from './components/RotatePhoto/RotatePhoto';
// import { data } from './productData';
import ProductDetails from './components/Products/ProductDetails';
import Container from 'react-bootstrap/Container';
import styles from './App.module.css';
import { useEffect, useState } from 'react';
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
    const [data, setData]= useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/productData.json`)
        .then(res => res.json())
        .then(data => {
            setData(data.database);
        })
    }, [])

    return (
        <div className="App">
            <Container fluid="xxl" className={styles['AppStyle']}>
                <Header />
                <ControlledCarousel /> <br />
                <ProductDetails data={data} />
            </Container>
        </div>
    );
}

export default App;
