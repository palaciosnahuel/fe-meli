import React, { useState,useEffect } from 'react'; 
import './Productlist.scss';
import ProductItem from '../ProductItem/ProductItem';
import {getProducts} from '../../Services/MeliApi';
import {useLocation } from "react-router-dom";
import Breadcrumb from '../Breadcrumb/Breadcrumb';


const Productlist = () => {

    const [productos, setProductos] = useState([]);
    const [categories, setCategories] = useState([]);

    const location = useLocation();
    let query = new URLSearchParams(location.search).get("search");

    useEffect(() => {
        getProducts(query).then((response)=>{ 
            setProductos(response);
            setCategories(response.categories);
            document.title = `${query} | MercadoLibre.com.ar`;
        });;
      }, [location]);

    return (
        <div>
            {categories ? <Breadcrumb categories={ categories }/> : ""}
            <ol className="product-container">
                {productos.items ? productos.items.map((item, index) => <ProductItem data={item} key={index}/>) : (<div> Cargando</div>)}
            </ol>
        </div>
    )
}

export default Productlist;