import React, { useState } from 'react'; 

import MeliLogo from '../../Assets/Logo_ML@2x.png.png.png';
import SearchIcon from '../../Assets/ic_Search.png';
import './Searchbox.scss';
import {getProducts} from '../../Services/MeliApi';

import { useHistory } from "react-router-dom";

const Searchbox = () => {

    const [query, setQuery] = useState('');
    const history = useHistory();

    const handleClickSearchButton = () => {
        history.push({ pathname: "/items", search: `?search=${query}` });
    }
    
    const handleKeyUp = (e) => {
        setQuery(e.target.value);
        if (e.key === 'Enter') {
            const data =  getProducts(query);
        }
    }

    return (
            <div className='input-container'>
                <img src={MeliLogo} alt="MercadoLibre Logo"  className='searchbox-logo'/>
                <input
                    onKeyUp={handleKeyUp}
                    type='text'
                    className='text-input'
                    placeholder='Nunca dejes de buscar'
                />
                <button onClick={handleClickSearchButton}  className='search-button'>
                <img src={SearchIcon} alt="Buscar" />
                </button>
            </div>
    )
}

export default Searchbox;
