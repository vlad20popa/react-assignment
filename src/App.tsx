import React, {useCallback, useState} from 'react';
import ProductAdd from "./ProductComponents/ProductAdd";
import './App.css';
import {ProductList} from "./ProductComponents/ProductsList";
import Product from './ProductComponents/Product';

function App() {
    const initialProductList: Array<Product> = [];
    const [productList, setProductList] = useState(initialProductList);

    const addToList = useCallback((product: Product) => {
        setProductList(productList => [...productList, product]);
    }, []);

    const removeProduct = useCallback((productIndex: number) => {
        const updatedProducts = productList.filter((product, index) => index !== productIndex);
        setProductList(updatedProducts);
    }, [productList]);

    return (
        <div className="App">
            <ProductAdd addItem={addToList}/>
            <ProductList items={productList} removeItem={removeProduct}/>
        </div>
    );
}

export default App;
