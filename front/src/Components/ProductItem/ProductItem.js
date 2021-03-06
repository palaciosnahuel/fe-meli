import React from 'react';
import './ProductItem.scss';
import { useHistory } from "react-router-dom";
import TruckIcon from '../../Assets/ic_shipping.png';

const ProductItem = (product) => {

    const history = useHistory();
    const handleClick = (id) => { history.push({ pathname: `/items/${id}`});}

     /*
     En Argentina los "Dígitos mínimos de agrupación" se establecen en 2
     https://st.unicode.org/cldr-apps/v#/es/Symbols/70ef5e0c9d323e01 
     En caso de querer usar el separador de miles, parsear a mano.
    */ 
    const price = (product.data.price.amount).toLocaleString(product.data.price.currency);
    const decimal = (product.data.price.decimals !== "00" && product.data.price.decimals);

    return (
            <li className="product-item-card">
                <div className="product-item-image" onClick={()=>handleClick(product.data.id)} >
                    <img src={product.data.picture} alt={product.data.title} />
                </div>
                <div className="product-item-body">
                    <div className="product-item-price">$ {price}
                        {decimal &&<sup>{decimal}</sup>}
                        {product.data.free_shipping &&<img src={TruckIcon} alt='Envío gratis' className='shipping-icon'/>}
                    </div>
                    <span className="product-item-address">{product.data.address.state_name}</span>
                    <h2 className="product-item-title" onClick={()=>handleClick(product.data.id)}>
                        {product.data.title}
                    </h2>
                </div>
            </li>
    )
}

export default ProductItem;
