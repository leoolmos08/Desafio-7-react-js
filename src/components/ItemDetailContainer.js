import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/CustomFetch";
//import getItem from "../utils/getItem";
import ItemDetail from "./ItemDetail";
const { products } = require('../utils/products');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
       customFetch(2000, products.find(item=>item.id == itemId))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;