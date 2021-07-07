import React, { useState,useEffect} from 'react'; 
import {useParams} from "react-router-dom";
import {getProduct} from '../../Services/MeliApi';
import './ProductDetail.scss';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const ProductDetail = () => {

    const [producto, setProductos] = useState([]);
  
    let { id } = useParams();

    useEffect(() => {
        getProduct(id).then((response)=>{ 
            setProductos(response);
            document.title = `${response.item.title} | MercadoLibre.com.ar`;
        });
      }, [id]);

    /*
     En Argentina los "Dígitos mínimos de agrupación" se establecen en 2
     https://st.unicode.org/cldr-apps/v#/es/Symbols/70ef5e0c9d323e01 
     En caso de querer usar el separador de miles, parsear a mano.
    */
    const priceParse = (price, currency) => {
        return (price).toLocaleString(currency);
    } 

    const decimalParse = (decimal) => {
        return (decimal !== "00" && decimal);
    } 

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
                                <div className="product-detail-statussold">
                                    {producto.item.condition} - {producto.item.sold_quantity} vendidos
                                </div>
                                <h1 className="product-detail-title">{producto.item.title}</h1>
                                <div className="product-detail-price">
                                    $ {priceParse(producto.item.price.amount)} 
                                    <sup>{decimalParse(producto.item.price.decimals)}</sup>
                                </div>
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
