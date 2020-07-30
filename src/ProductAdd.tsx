import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import "./ProductAdd.css";
import TextField from '@material-ui/core/TextField';



export const ProductAdd: FC = () => {

    return (
        <div className="counter">
            <div className="counter-container">
                <Button className="button" variant="outlined" color="secondary">-</Button>
                <TextField className="amount-text" id="outlined-basic" label="Amount" variant="outlined" />
                <Button className="button" variant="outlined" color="primary">+</Button>

            </div>
            <div className="product-text">
                <TextField className="product-text" id="outlined-basic" label="Product name" variant="outlined" />
            </div>

            <Button  variant="contained" color="primary">Add</Button>
        </div>
    );

}

export default ProductAdd;