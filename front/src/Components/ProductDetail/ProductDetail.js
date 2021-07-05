import React, { useState,useEffect} from 'react'; 
import {useLocation,useParams} from "react-router-dom";
import {getProduct} from '../../Services/MeliApi';
import './ProductDetail.scss';

const ProductDetail = () => {

    const [producto, setProductos] = useState([]);
    const location = useLocation();
  
    let { id } = useParams();

    useEffect(() => {
        getProduct(id).then((response)=>{ 
            setProductos(response);
            document.title = `${id} | MercadoLibre.com.ar`;
        });;
      }, [location]);

    return (
        <div>
        {producto.item ? <div>{producto.item.id}</div> : <div>Loading</div> }
        </div>
    )
}

export default ProductDetail;
