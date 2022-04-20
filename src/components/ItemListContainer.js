import { useState, useEffect} from "react";
import ItemList from './ItemList';
import customFetch from '../utils/CustomFetch'
import { useParams } from "react-router-dom";
const { products } = require('../utils/products');

const ItemListContainer = () => {
    const onAdd = (rta) => {
        alert("Has seleccionado  " + rta + "  hamburguesas.");
    }

    const [datos , setDatos] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        if (categoryId == undefined){
            customFetch(2000, products)
                .then(result => setDatos(result))
                .catch(err => console.log(err))
        }else{
            customFetch(2000, products.filter(item=>item.categoryId == categoryId))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        }
    }, [categoryId]);
    
    return (
        <>
        <ItemList items={datos}/>
        </>
    );
}
export default ItemListContainer;