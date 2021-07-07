import React from 'react';
import './ProductItem.scss';
import { useHistory } from "react-router-dom";
import TruckIcon from '../../Assets/ic_shipping.png';


const ProductItem = (product) => {

    const history = useHistory();
    const handleClick = (id) => { history.push({ pathname: `/items/${id}`}); 
}

    // El separador de miles en ARS separa a partir de 5 dígitos. 
    const price = (product.data.price.amount).toLocaleString(product.data.price.currency);
    const decimal = (product.data.price.decimals != "00" && product.data.price.decimals);

    return (
            <li className="product-item-card">
                
                <div className="product-item-image" onClick={()=>handleClick(product.data.id)} >
                    <img src={product.data.picture} alt={product.data.title} />
                </div>
                <div className="product-item-body">
                    <div className="product-item-price">$ {price}
                    {decimal &&
                    <sup>{decimal}</sup>
                    }
                    {product.data.free_shipping &&
                    <img src={TruckIcon} alt='Free shipping available' className='shipping-icon' />
                    }
                    </div>
                    <span className="product-item-address">{product.data.address.state_name}</span>
                    <span className="product-item-title" onClick={()=>handleClick(product.data.id)}>{product.data.title}</span>
                </div>
            </li>
    )
}

export default ProductItem;
