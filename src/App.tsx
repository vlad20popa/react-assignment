import React, {useEffect} from 'react';
import ProductAdd from "./ProductAdd";
import './App.css';
import {ProductList} from "./ProductsList";
import Product from './Product';

function App() {
    const initialProductList: Array<Product> = [];
    const [productList, setProductList] = React.useState(initialProductList);

    useEffect(() => {
        console.log(productList);
    });

    const addToList = (product: Product) => {
        setProductList(productList => [...productList, product]);
    }

    const removeProduct = (product: Product) => {
        let removeIndex: number = productList.map(product => {return product.name;}).indexOf(product.name)
        setProductList(productList => productList.splice(removeIndex, 1))
    }

    return (
        <div className="App">
            <ProductAdd addItem={addToList}/>
            <ProductList />
        </div>
    );
}

export default App;
