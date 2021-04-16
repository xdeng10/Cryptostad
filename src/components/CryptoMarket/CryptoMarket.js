import React, { Component } from 'react';
import './CryptoMarket.css';
import MarketOverview from './MarketOverview';


class CryptoMarket extends Component {
    render() {
        return (
            <main>
                <h1>CryptoMarket</h1>
                <MarketOverview />
            </main>
        );
    }
}


export default CryptoMarket;
