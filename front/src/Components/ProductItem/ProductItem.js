import React from 'react';
import './ProductItem.scss';
import { useHistory } from "react-router-dom";
import TruckIcon from '../../Assets/ic_shipping.png';


const ProductItem = (data) => {

    const history = useHistory();
    const handleClick = (id) => { history.push({ pathname: `/items/${id}`}); 
}
console.log(data.data.price)

    // El separador de miles en ARS separa a partir de 5 dígitos. 
    const price = (data.data.price.amount).toLocaleString(data.data.price.currency);
    const decimal = (data.data.price.decimals != "00" && data.data.price.decimals);

    return (
            <li className="product-item-card">
                
                <div className="product-item-image" onClick={()=>handleClick(data.data.id)} >
                    <img src={data.data.picture} alt={data.title} />
                </div>
                <div className="product-item-body">
                    <div className="product-item-price">$ {price}
                    {decimal &&
                    <sup>{decimal}</sup>
                    }
                    {data.data.free_shipping &&
                    <img src={TruckIcon} alt='Free shipping available' className='shipping-icon' />
                    }
                    </div>
                    <span className="product-item-address">{data.data.address.state_name}</span>
                    <span className="product-item-title" onClick={()=>handleClick(data.data.id)}>{data.data.title}</span>
                </div>
            </li>
    )
}

export default ProductItem;
