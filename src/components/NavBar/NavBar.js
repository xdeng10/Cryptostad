import React, { Component } from 'react';
import './NavBar.css';
import logo from './coinLogo.png';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav className="nav-container">
                <Link className="logo-container" to="/home">
                    <div className='logo-table'>
                        <img src={logo} className="logo-image" alt="Logo" />
                        <span className="company-name">Crytoexchange</span>
                    </div>
                </Link>

                <div className="menu-container">
                    <Link className="page-name" to="/cryptomarket" title="CryptoMarket">Crypto Market</Link>
                    {/*<Link className="page-name" to="/about" title="About">About us</Link>*/}
                    <Link className="page-name" to="/portfolio" title="Portfolio">Portfolio</Link>
                    {this.props.userSignedIn ? 
                        <Link className="page-name signin-button" to="/" title="Sign Out" onClick={this.props.signout}>Sign out</Link>
                        :
                        <Link className="page-name signin-button" to="/signin" title="Sign In">Sign in</Link>
                    }
                </div>
            </nav>
        );
    }
}

export default NavBar;
