import React, { Component } from 'react';
import './MarketOverview';
import { Link } from 'react-router-dom';



class CoinOverview extends Component {

    render() {
        const { id, name, image, symbol, price, volume, priceChangePercent, marketcap } = this.props;
        const logoAlt = name + " logo";

        return (
            <div className='coin-row'>
                <div className="coin-logo">
                    <img src={image} alt={logoAlt} />
                </div>
                <Link className="coin-name" to={`/coin/${id}`}>
                    <h3>{name}</h3>
                </Link>
                <div className="coin-sym">
                    <p>{symbol}</p>
                </div>

                <div className="coin-price">
                    <p>{(price) ? `${Number.parseFloat(price).toFixed(2)}` : "NaN"}</p>
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
