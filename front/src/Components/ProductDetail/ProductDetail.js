import React, { useState,useEffect} from 'react'; 
import {useLocation,useParams} from "react-router-dom";
import {getProduct} from '../../Services/MeliApi';
import './ProductDetail.scss';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const ProductDetail = () => {

    const [producto, setProductos] = useState([]);
    const location = useLocation();
  
    let { id } = useParams();

    useEffect(() => {
        getProduct(id).then((response)=>{ 
            setProductos(response);
            document.title = `${response.item.title} | MercadoLibre.com.ar`;
        });
      }, [id]);

    return (
        <div className="flex-wrapper product-detail-container">
        {producto.item ?  
            <div>
                <Breadcrumb categories={producto.item.category}/>
                <div className="product-detail-info"> 
                    <div className="flex-grid">
                            <div className="d-col-9 product-detail-img">
                                <img src={producto.item.picture} alt='Envio Gratis'/>
                            </div>
                            <div className="d-col-3">
                                <div className="product-detail-statussold">{producto.item.condition} - {producto.item.sold_quantity} vendidos</div>
                                <div className="product-detail-title">{producto.item.title}</div>
                                <div className="product-detail-price">$ {producto.item.price.amount}</div>
                                <div className="d-col-12"> <button className="product-detail-button"> Comprar </button></div>
                            </div>
                    </div> 
                    <div className="flex-grid">
                            <div className="d-col-8">
                                 <div className="product-detail-description-title">Descripción del producto</div>
                                {producto.item.description}
                            </div>
                            <div className="d-col-4"></div>
                    </div> 
                </div> 
            </div>
                : <div>Cargando</div> 
            
        }
        </div>
    )
}

export default ProductDetail;
