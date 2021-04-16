import React, { Component } from 'react';
import './MarketOverview';

class CoinOverview extends Component {

    render() {
        const { image, name, symbol, price, volume, priceChangePercent, marketcap } = this.props;

        return (
            <div className='coin-row'>
                <div className="coin-logo">
                    <img src={image} alt='Cryptocurrency Logo' />
                </div>
                <div className="coin-name">
                    <h3>{name}</h3>
                </div>
                <div className="coin-sym">
                    <p>{symbol}</p>
                </div>

                <div className="coin-price">
                    <p>${Number.parseFloat(price).toFixed(2)}</p>
                </div>
                <div className="coin-volume">
                    <p>{(volume) ? volume.toLocaleString() : "-"}</p>
                </div>
                <div className="coin-change">
                    <p className={priceChangePercent >= 0 ? 'price-green' : 'price-red'}>
                        {(priceChangePercent) ? `${Number.parseFloat(priceChangePercent).toFixed(2)}%`:"-"}
                    </p>
                </div>
                <div className="coin-market-cap">
                    <p>{(marketcap) ? `$${marketcap.toLocaleString()}` : "-"}</p>
                </div>
            </div>
        );
    }
}



export default CoinOverview;
