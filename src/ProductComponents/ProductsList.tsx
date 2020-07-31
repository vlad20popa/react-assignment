import React, {FC} from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './ProductList.css';
import Product from "./Product";

interface ProductListInterface {
    items: Array<Product>,
    removeItem: any
}

export const ProductList: FC<ProductListInterface> = (props) => {

    const generateItems = () => {
        return props.items.map((item, index) => {
            return (
                <ListItem key={index}>
                    <ListItemText primary={item.name + " " + item.amount}/>
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => props.removeItem(index)} edge="end" aria-label="delete">
                            <DeleteIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            );
        });
    }

    return (
        <Grid container={true} alignItems="center" spacing={0} direction="column" justify="center">
            <Typography variant="h6">
                Product list
            </Typography>
            <div>
                <List dense={false}>
                    {props.items.length > 0 ? generateItems() : <h4>No items to display</h4>}
                </List>
            </div>
        </Grid>
    );
}