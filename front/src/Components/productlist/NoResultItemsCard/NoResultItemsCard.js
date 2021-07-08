import React from 'react';
import './NoResultItemsCard.scss'

const NoResultCardItems = () => {
    return (

        <ul class="noresult-container">
             <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
             <li><strong>Revisá la ortografía</strong> de la palabra.</li>
             <li>Utilizá <strong>palabras más genéricas</strong> o menos palabras.</li>
        </ul>
    )
}

export default NoResultCardItems;
