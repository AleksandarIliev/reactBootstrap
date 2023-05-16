import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
// import TodoList from './components/TodoList/TodoList';
// import { data } from './productData';
import ControlledCarousel from './components/RotatePhoto/RotatePhoto';
import AllProducts from './components/Products/AllProducts';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer/Footer';
import Product from './components/Products/Product';
import { Contact } from './components/Contact/Contact';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { About } from './components/About/About';
import { Header } from './components/Header/Header';
import { Error } from './components/Error/Error';

import { Routes, Route, useLocation, NavLink } from 'react-router-dom';
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
    const location = useLocation();
    const { hash, pathname, search } = location;
    // console.log(pathname);

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
                            <>
                                <h5 className={styles['title']}>Here you can see part of the products who we are developing:</h5>
                                <AllProducts data={data.slice(0, 3)} />
                                <h5 className={styles['title']}><NavLink to='/allProducts'>To see the full list click here...</NavLink></h5>
                            </>
                        </>
                    }></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/product" element={<Product />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="*" element={<Error />}></Route>

                    <Route path="/allProducts" element={<AllProducts data={data} pathname={pathname} />}></Route>
                    <Route path="/vibroMachines" element={<AllProducts data={data.filter(data => data.type.includes('vibroMachines'))} />}></Route>
                    <Route path="/measuringEquipments" element={<AllProducts data={data.filter(data => data.type.includes('measuringEquipments'))} />}></Route>
                    <Route path="/transportMachines" element={<AllProducts data={data.filter(data => data.type.includes('transportMachines'))} />}></Route>
                    <Route path="/bunkers" element={<AllProducts data={data.filter(data => data.type.includes('bunkers'))} />}></Route>
                    <Route path="/shredderMachines" element={<AllProducts data={data.filter(data => data.type.includes('shredderMachines'))} />}></Route>
                    <Route path="/kitchenEquipments" element={<AllProducts data={data.filter(data => data.type.includes('kitchenEquipments'))} />}></Route>
                    <Route path="/pneumaticMachines" element={<AllProducts data={data.filter(data => data.type.includes('pneumaticMachines'))} />}></Route>
                    <Route path="/sievedMachines" element={<AllProducts data={data.filter(data => data.type.includes('sievedMachines'))} />}></Route>
                    <Route path="/hydraulicMachines" element={<AllProducts data={data.filter(data => data.type.includes('hydraulicMachines'))} />}></Route>
                    <Route path="/filteringMachines" element={<AllProducts data={data.filter(data => data.type.includes('filteringMachines'))} />}></Route>
                    <Route path="/dosingMachines" element={<AllProducts data={data.filter(data => data.type.includes('dosingMachines'))} />}></Route>

                    <Route path="/*/*" element={<Error />}></Route>
                </Routes>
                <Footer />
            </Container>
        </div>
    );
}

export default App;
