import React from 'react';
import './ProductItem.scss';

const ProductItem = (data) => {
    console.log("data");
    return (
        <div >
            <img className="product-list-image" src={data.data.picture} alt={data.title} />
            <p>{data.title}</p>
            <p>{data.id}</p>
        </div>
    )
}

export default ProductItem;
