import React from 'react';
import './NavBar.css';
import logo from './coinLogo.png';
import { Link } from 'react-router-dom';



//This will be a simple component with no state: So we can just use a function. 
const NavBar = () => {
        return(
            <nav className="dt w-100 border-box pa3 ph4-ns bg-navy">
                <Link className="dtc tl white w-20 v-top" to="/Home"  style={{ textDecoration: 'none' }}>
                    <div className='dt tl'>
                        <img src={logo} className="dtc v-mid dib w2 h2 br-100" alt="Logo" />
                        <span className="dtc v-mid pl3">Crytoexchange</span>
                    </div>
                </Link>

                <div className="dtc v-mid w-80 tr">
                    <Link className="v-mid bg-animate hover-bg-dark-blue white f6 f5-ns dib mr3 mr4-ns ph1 pv2 br2 no-underline" to="/CryptoMarket" title="CryptoMarket">Crypto Market</Link>
                    <Link className="v-mid hover-bg-dark-blue white f6 f5-ns dib mr3 mr4-ns ph1 pv2 br2 no-underline" to="/About" title="About">About us</Link>
                    <Link className="v-mid hover-bg-dark-blue white f6 f5-ns dib mr3 mr4-ns ph1 pv2 br2 no-underline" to="/Contact" title="Contact">Contact</Link>

                    <Link className="v-mid dark-blue bg-white f6 f5-ns dib ph3 pv2 br2 no-underline" to="/Signin" title="Signin">Sign in</Link>
                </div>
            </nav>
        );
    
}



export default NavBar;
