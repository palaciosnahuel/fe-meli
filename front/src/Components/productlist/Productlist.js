import React, {useState,useEffect} from 'react'; 
import ProductItem from '../ProductItem/ProductItem';
import {getProducts} from '../../Services/MeliApi';
import {useLocation} from "react-router-dom";
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import './ProductList.scss';
import NoResultCardItems from '../ProductList/NoResultItemsCard/NoResultItemsCard';


const ProductList = () => {

    const [productos, setProductos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [resultsFound, setResultsFound] = useState(true);

    const location = useLocation();
    let query = new URLSearchParams(location.search).get("search");

    useEffect(() => {
        getProducts(query).then((response)=>{ 
            setProductos(response.items);
            (response.items.length !== 0 ) ? setResultsFound(true) : setResultsFound(false);
            setCategories(response.categories);
            document.title = `${query} | MercadoLibre.com.ar`;
        }).then();
      }, [query]);


    return (
        
        <div> 
            {resultsFound ? 
            <div> 
                {categories ? <div className="product-breadcrumb-container"><Breadcrumb categories={ categories }/>  </div> : ""}
                <ol className="product-container">
                    {productos ? productos.map((item, idx) => <ProductItem data={item} key={idx}/>) : (<div> Cargando</div>)}
                </ol>
            </div> 
            : <NoResultCardItems/> }
            
        </div>
    )
}

export default ProductList;