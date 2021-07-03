import React from 'react';
import './Product.scss';

const Product = (data) => {
    return (
        <div >
            <img src={data.data.picture} alt={data.data.title} />
            <p>{data.data.title}</p>
        </div>
    )
}

export default Product;
