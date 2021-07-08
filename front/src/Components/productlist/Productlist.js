import React, {useState,useEffect} from 'react'; 
import ProductItem from '../ProductItem/ProductItem';
import {getProducts} from '../../Services/MeliApi';
import {useLocation} from "react-router-dom";
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import './ProductList.scss';


const ProductList = () => {

    const [productos, setProductos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [resultsFound, setResultsFound] = useState(false);

    const location = useLocation();
    let query = new URLSearchParams(location.search).get("search");

    useEffect(() => {
        getProducts(query).then((response)=>{ 
            setProductos(response.items);
            (response.items.length !== 0 ) ? setResultsFound(true) : setResultsFound(false);
            setCategories(response.categories);
            document.title = `${query} | MercadoLibre.com.ar`;
        });
      }, [location]);


    return (
        
        <div> 
            {resultsFound ? 
            <div> 
                {categories ? <div className="product-breadcrumb-container"><Breadcrumb categories={ categories }/>  </div> : ""}
                <ol className="product-container">
                    {productos ? productos.map((item, idx) => <ProductItem data={item} key={idx}/>) : (<div> Cargando</div>)}
                </ol>
            </div> 
            : <div className="product-container"> Sin resultados </div>}
            
        </div>
    )
}

export default ProductList;