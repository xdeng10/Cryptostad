import React, { Component } from 'react';
import './NavBar.css';
import logo from './coinLogo.png';
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <nav className="nav-container">
                <Link className="logo-container" to="/home">
                    <div className='logo-table'>
                        <img src={logo} className="logo-image" alt="Logo" />
                        <span className="company-name">Crytoexchange</span>
                    </div>
                </Link>

                <div className="menu-container v-mid w-80 tr">
                    <Link className="page-name" to="/cryptomarket" title="CryptoMarket">Crypto Market</Link>
                    <Link className="page-name" to="/about" title="About">About us</Link>
                    <Link className="page-name" to="/contact" title="Contact">Contact</Link>

                    <Link className="page-name signin-button" to="/Signin" title="signin">Sign in</Link>
                </div>
            </nav>
        );
    }
}

export default About;
