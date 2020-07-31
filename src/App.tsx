import React from 'react';
import ProductAdd from "./ProductComponents/ProductAdd";
import './App.css';
import {ProductList} from "./ProductComponents/ProductsList";
import Product from './ProductComponents/Product';

function App() {
    const initialProductList: Array<Product> = [];
    const [productList, setProductList] = React.useState(initialProductList);

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
