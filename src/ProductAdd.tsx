import React, {FC, useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import "./ProductAdd.css";
import TextField from '@material-ui/core/TextField';
import Product from "./Product";


export interface ProductAddInterface {
    addItem: (adItem: Product) => void;
}

export const ProductAdd: FC<ProductAddInterface> = props => {

    const [amount, setAmount] = useState(0);
    const[productName, setProductName] = useState("");

    const incrementAmount = () => {
        setAmount(amount + 1);
    }

    const decrementAmount = () => {
        if (amount > 0) {
            setAmount(amount - 1);
        }
    }

    const handleAmountChange = (e: any) => {
        if (e.target && e.target.value) {
            setAmount(e.target.value);
        }

    }

    const handleNameChange = (e: any) => {
        if (e.target && e.target.value) {
            setProductName(e.target.value);
        }
    }

    return (
        <div className="counter">
            <div className="counter-container">
                <Button onClick={decrementAmount} className="button" variant="outlined" color="secondary">-</Button>
                <TextField className="amount-text" id="outlined-basic" label="Amount" value={amount}
                           onChange={handleAmountChange} variant="outlined"/>
                <Button onClick={incrementAmount} className="button" variant="outlined" color="primary">+</Button>

            </div>
            <div className="product-text">
                <TextField className="product-text" id="outlined-basic" label="Product name" variant="outlined" onChange={handleNameChange}/>
            </div>

            <Button onClick={() => {
                props.addItem({name: productName, amount: amount})
            }} variant="contained" color="primary">Add</Button>
        </div>
    );

}

export default ProductAdd;