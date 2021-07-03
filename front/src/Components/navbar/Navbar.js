import React from 'react';
import './Navbar.scss';
import Searchbox from '../searchbox/Searchbox';
import useState from 'react';

const Navbar = () => {

    return (
        <div className='navbar'>
           <Searchbox/>
        </div>
    )
}

export default Navbar;
