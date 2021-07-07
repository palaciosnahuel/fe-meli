import React from 'react';
import './Navbar.scss';
import Searchbox from '../Searchbox/Searchbox';

const Navbar = () => {
    return (
        <div className='navbar'>
           <Searchbox/>
        </div>
    )
}

export default Navbar;
