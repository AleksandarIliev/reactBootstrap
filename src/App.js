import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
// import TodoList from './components/TodoList/TodoList';
// import { data } from './productData';
import ControlledCarousel from './components/RotatePhoto/RotatePhoto';
import ProductDetails from './components/Products/ProductDetails';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer/Footer';
import Product from './components/Products/Product';
import { Contact } from './components/Contact/Contact';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { About } from './components/About/About';
import { Header } from './components/Header/Header';

import { Routes, Route } from 'react-router-dom';
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
    const [data, setData] = useState([]);

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
                <Routes>
                    <Route path="/" element={
                        <>
                            <ControlledCarousel /> <br />
                            <ProductDetails data={data} />
                        </>
                    }></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/product" element={<Product />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                </Routes>

                <Footer />
            </Container>
        </div>
    );
}

export default App;
