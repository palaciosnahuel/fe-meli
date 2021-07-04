import React, { useState,useEffect } from 'react'; 
import './Productlist.scss';
import ProductItem from '../ProductItem/ProductItem';
import {getProducts} from '../../Services/MeliApi';
import {useLocation } from "react-router-dom";

const Productlist = () => {

    const [productos, setProductos] = useState([]);
    const location = useLocation();
    let query = new URLSearchParams(location.search).get("search");

    useEffect(() => {
        getProducts(query).then((response)=>{ 
            setProductos(response);
            document.title = `${query} | MercadoLibre.com.ar`;
        });;
      }, [location]);


    return (
        <div>
           {productos.items ? 
                productos.items.map((item, index) => <ProductItem data={item} key={index}/>) : (<div> Cargando</div>)}
        </div>
    )
}

export default Productlist;