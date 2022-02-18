import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <h1>My TodoList</h1>
            <div className='links'>
                <NavLink exact to="/" activeClassName="nav-active">Home</NavLink>
                <NavLink exact to="about" activeClassName="nav-active"> About</NavLink>
            </div>
        </div>
    );
};

export default Navigation;