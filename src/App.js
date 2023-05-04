// import { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
// import TodoList from './components/TodoList/TodoList';
import ControlledCarousel from './components/RotatePhoto/RotatePhoto';
import { data } from './components/Products/productData';
import ProductDetails from './components/Products/ProductDetails';

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

    return (
        <div className="App">
            <Header />
            <ControlledCarousel /> <br />
            <ProductDetails data={data} />
        </div>
    );
}

export default App;
