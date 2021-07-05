import React from 'react';
import './ProductItem.scss';

const ProductItem = (data) => {
    
    console.log(data)

    return (
        <div className="product-item-card">
            
            <div className="product-item-image">
                <img src={data.data.picture} alt={data.title} />
            </div>

            <div className="product-item-body">
                <div className="product-item-price">{data.data.price.amount}</div>
                <span className="product-item-title">{data.data.title}</span>
                <span className="product-item-address">{data.data.address.state_name}</span>
            </div>
            
        </div>
    )
}

export default ProductItem;
