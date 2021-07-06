import React from 'react';
import './Breadcrumb.scss';

const Breadcrumb = (categories) => {
    return (
        <ul className='breadcrumb arrows'>
            { categories.categories.map((category, index) => <li key={index}>{category} </li>)}
        </ul>
    )
}

export default Breadcrumb;
