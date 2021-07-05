import React from 'react';
import './ProductItem.scss';
import { useHistory } from "react-router-dom";

const ProductItem = (data) => {
    const history = useHistory();

    const handleRedirect = (id) => { history.push({ pathname: `/items/${id}`}); }

    return (
        <div className="product-item-card">
            
            <div className="product-item-image" onClick={()=>handleRedirect(data.data.id)} >
                <img src={data.data.picture} alt={data.title} />
            </div>
            <div className="product-item-body">
                <div className="product-item-price">{data.data.price.amount}</div>
                <span className="product-item-address">{data.data.address.state_name}</span>
                <span className="product-item-title">{data.data.title}</span>
            </div>
            
        </div>
    )
}

export default ProductItem;
