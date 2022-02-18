import React from 'react';
import Error from '../images/notfound.png';

const NotFound = () => (
  <div className="pageNotFound">
    <h1>Error404 Page Not Found</h1>
    <img src={Error} alt="page not found" />
  </div>
);

export default NotFound;
