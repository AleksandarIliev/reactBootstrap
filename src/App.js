import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledCarousel from './components/RotatePhoto/RotatePhoto';
import Container from 'react-bootstrap/Container';
// import TodoList from './components/TodoList/TodoList';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Product from './components/Products/Product';
import AllProducts from './components/Products/AllProducts';
import { Contact } from './components/Contact/Contact';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { About } from './components/About/About';
import { Header } from './components/Header/Header';
import { Error } from './components/Error/Error';
import { Detail } from './components/Products/Detail';
import { Logout } from './components/Logout/Logout';

import { Routes, Route, useLocation, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { ProductDetails } from './components/Products/ProductDetails';
// import { AuthContext } from './components/Contexts/AuthContext';
// import { authServiceFactory } from './components/Services/authServices';
// import { useNavigate } from 'react-router-dom';
import { CorrectSend } from './components/Contact/CorrectSend'; 
import { RouteGuard } from './components/RouteGuard/RouteGuard'
// const baseUrl = 'http://localhost:3030/jsonstore/todos';
import { AuthProvider } from './components/Contexts/AuthContext';

function App() {
    // const [todos, setTodos] = useState([]);

    // useEffect(() => {
    //     fetch(baseUrl)
    //     .then(res => res.json())
    //     .then(result => {
    //         setTodos(Object.values(result));
    //     })
    // }, []);

    // const navigate = useNavigate();
    // const [auth, setAuth] = useState({});
    // const authService = authServiceFactory(auth.accessToken);
    
    const [data, setData] = useState([]);
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        fetch(`http://localhost:3000/productData.json`)
            .then(res => res.json())
            .then(data => {
                setData(data.database);
            })
    }, [])

    return (
        <AuthProvider>
            <div className="App">
                <Container fluid="xxl" className={styles['AppStyle']}>
                    <Header />
                    <Routes window={window.scrollTo(0, 0)}>
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
                        <Route path="/product" element={<Product pathname={pathname} />}></Route>
                        <Route element={<RouteGuard />}>
                            <Route path="/contact"
                                serviceId={process.env.REACT_APP_EMAILJS_SERVICE_ID}
                                templateId={process.env.REACT_APP_EMAILJS_TEMPLATE_ID}
                                userssId={process.env.REACT_APP_EMAILJS_USER_ID}
                                element={<Contact />}></Route>
                            <Route path="/contact/correctSend" element={<CorrectSend />}></Route>
                        </Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/logout" element={<Logout />}></Route>
                        <Route path="/register" element={<Register />}></Route>

                        <Route path="/allProducts" element={<AllProducts data={data} pathname={pathname} />}></Route>
                        <Route path={`/allProducts/:${data.id}`} element={<Detail data={data} />}></Route>
                        <Route path="/vibroMachines" element={<AllProducts data={data.filter(data => data.type.includes('vibroMachines'))} />}></Route>
                        <Route path={`/vibroMachines/:${data.id}`} element={<Detail data={data} />}></Route>
                        <Route path="/measuringEquipments" element={<AllProducts data={data.filter(data => data.type.includes('measuringEquipments'))} />}></Route>
                        <Route path={`/measuringEquipments/:${data.id}`} element={<Detail data={data} />}></Route>
                        <Route path="/transportMachines" element={<AllProducts data={data.filter(data => data.type.includes('transportMachines'))} />}></Route>
                        <Route path={`/transportMachines/:${data.id}`} element={<Detail data={data} />}></Route>
                        <Route path="/bunkers" element={<AllProducts data={data.filter(data => data.type.includes('bunkers'))} />}></Route>
                        <Route path={`/bunkers/:${data.id}`} element={<Detail data={data} />}></Route>
                        <Route path="/shredderMachines" element={<AllProducts data={data.filter(data => data.type.includes('shredderMachines'))} />}></Route>
                        <Route path={`/shredderMachines/:${data.id}`} element={<Detail data={data} />}></Route>
                        <Route path="/kitchenEquipments" element={<AllProducts data={data.filter(data => data.type.includes('kitchenEquipments'))} />}></Route>
                        <Route path={`/kitchenEquipments/:${data.id}`} element={<Detail data={data} />}></Route>
                        <Route path="/pneumaticMachines" element={<AllProducts data={data.filter(data => data.type.includes('pneumaticMachines'))} />}></Route>
                        <Route path={`/pneumaticMachines/:${data.id}`} element={<Detail data={data} />}></Route>
                        <Route path="/sievedMachines" element={<AllProducts data={data.filter(data => data.type.includes('sievedMachines'))} />}></Route>
                        <Route path={`/sievedMachines/:${data.id}`} element={<Detail data={data} />}></Route>
                        <Route path="/hydraulicMachines" element={<AllProducts data={data.filter(data => data.type.includes('hydraulicMachines'))} />}></Route>
                        <Route path={`/hydraulicMachines/:${data.id}`} element={<Detail data={data} />}></Route>
                        <Route path="/filteringMachines" element={<AllProducts data={data.filter(data => data.type.includes('filteringMachines'))} />}></Route>
                        <Route path={`/filteringMachines/:${data.id}`} element={<Detail data={data} />}></Route>
                        <Route path="/dosingMachines" element={<AllProducts data={data.filter(data => data.type.includes('dosingMachines'))} />}></Route>
                        <Route path={`/dosingMachines/:${data.id}`} element={<Detail data={data} />}></Route>
                        <Route path={`/:${data.id}`} element={<Detail data={data} />}></Route>

                        <Route path={`*/:${data.id}`} element={<Detail data={data.filter(data => data.id)} />}></Route>

                        <Route path="/*" element={<Error />}></Route>
                        <Route path="/*/*" element={<Error />}></Route>
                        <Route path="/*/*/*" element={<Error />}></Route>
                    </Routes>
                    <Footer />
                </Container>
            </div>
        </AuthProvider>
    );
}

export default App;


//ant Design
//css flexBox