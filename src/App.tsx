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
    }, [productList]);

    const addToList = (product: Product) => {
        setProductList(productList => [...productList, product]);
    }

    const removeProduct = (productIndex: number) => {
        console.log(productIndex);
        const updatedProducts = productList.filter((product, index) => index !== productIndex);
        setProductList(updatedProducts);
    }

    return (
        <div className="App">
            <ProductAdd addItem={addToList}/>
            <ProductList items={productList} removeItem={removeProduct}/>
        </div>
    );
}

export default App;
