import React, { Component } from 'react';
import portfoliodemo from './coinMarketDisplay.JPG';
import './Portfolio.css';

class RegistrationOffer extends Component {
    render() {
        return (
            <div className="regist-div">
                <table className="regist-offer">
                    <tbody>
                        <tr>
                            <td>
                                <h2>Sign up Today</h2>
                                <h1>Cryptoexchange Portfolio Tracker</h1>
                                <p>Keep track of your profits, losses and porfolio valuation with our easy to use platform</p>
                            </td>
                            <td>
                                <img src={portfoliodemo} alt="Portfolio demonstration" />
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}

export default RegistrationOffer;