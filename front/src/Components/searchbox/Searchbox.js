import React, { useState } from 'react'; 
import MeliLogo from '../../Assets/Logo_ML@2x.png.png.png';
import SearchIcon from '../../Assets/ic_Search.png';
import './Searchbox.scss';
import { useHistory } from "react-router-dom";

const Searchbox = () => {

    const [query, setQuery] = useState('');
    const history = useHistory();

    const handleClickLogo = () => { 
        history.push({ pathname: `/`}); 
    }

    const handleClickSearchButton = () => {
        history.push({ pathname: "/items", search: `?search=${query}` });
    }
    
    const handleKeyEnter = (e) => {
        if (e.key === 'Enter') {
            handleClickSearchButton();
        }
    }

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        handleClickSearchButton();
    }

    return (
            <form className='searchbox-container' onSubmit={handleSubmit} >
                <img src={MeliLogo} onClick={handleClickLogo} alt="MercadoLibre Logo"  className='searchbox-logo'/>
                <input
                    onKeyUp={handleKeyEnter}
                    onChange={handleChange}
                    type='text'
                    className='text-input'
                    placeholder='Nunca dejes de buscar'
                />
                <button type="submit" className='searchbox-button'>
                <img src={SearchIcon} alt="Buscar" />
                </button>
            </form>
    )
}

export default Searchbox;
