import React from 'react';
import ProductAdd from "./ProductAdd";
import './App.css';
import {ProductList} from "./ProductsList";

function App() {
  return (
    <div className="App">
      <ProductAdd/>
      <ProductList/>
    </div>
  );
}

export default App;
