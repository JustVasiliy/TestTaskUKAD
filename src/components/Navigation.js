import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg'
import './Header.css'
const Navigation = () => {
    return (
        <ul className="headerBG">
            <a href="#"><img src={logo} alt="logo" /></a>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
        </ul>
    );
};

export default  Navigation;