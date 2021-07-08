import React from 'react';
import './Page404.scss';

const Page404 = () => {
  return (
    <div className="page404-container">
      <h3>
         Parece que esta página no existe
      </h3>
      <a href="http://localhost:3000/" class="ui-empty-state__link">Volver atrás</a>
    </div>
  );
}

export default Page404;