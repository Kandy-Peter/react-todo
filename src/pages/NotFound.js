import React from 'react';
import Error from '../images/notfound.png';

const NotFound = () => (
  <div className="pageNotFound">
    <h1>Ooops! Error404: Page Not Found</h1>
    <img src={Error} alt="page not found" />
    <p>Please try again! If not, check your link.</p>
  </div>
);

export default NotFound;
