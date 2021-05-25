import React, { Component } from 'react';
import './CoinInfoSummary.css';
import './CoinPage';


class CoinInfoSummary extends Component {

    convertNumToPrice(x) {
        return Number.parseFloat(x).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    convertNumToPerc(x) {
        return Number.parseFloat(x).toFixed(2);
    }

    incDecArrow(x) {
        if (x >= 0) {
            return <span>&#9650;</span>;
        } else {
            return <span>&#9660;</span>;
        }
    }

    getTimeZone(coin_market_data) {
        let last_updated_data = coin_market_data.last_updated && coin_market_data.last_updated.toLocaleString();
        let time = new Date(last_updated_data);
        return ` (GMT${time.getTimezoneOffset() / (-60)})`;
    }

    getCoinLastUpdate(coin_market_data) {
        let last_updated_data = coin_market_data.last_updated && coin_market_data.last_updated.toLocaleString();
        let time = new Date(last_updated_data);
        return <span>{time.getFullYear()}/{time.getMonth()}/{time.getDate()} <br /> {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</span>;
    }

    getCoinPriceChange(coin_market_data) {
        let priceChange24 = coin_market_data.price_change_24h_in_currency && coin_market_data.price_change_24h_in_currency.cad;
        let priceChange24Perc = coin_market_data.price_change_percentage_24h;

        if (priceChange24 && priceChange24Perc) {
            return <span className={priceChange24 >= 0 ? 'price-green' : 'price-red'}>
                {this.incDecArrow(priceChange24)} {this.convertNumToPrice(priceChange24)}$
                    <br />
                {this.incDecArrow(priceChange24Perc)} {this.convertNumToPerc(priceChange24Perc)}%
                </span>;
        } else {
            return <span> - <br /> -</span>;
        }
    }

    getCoin24LowHigh(coin_market_data) {
        let price24Low = coin_market_data.low_24h && coin_market_data.low_24h.cad;
        let price24High = coin_market_data.high_24h && coin_market_data.high_24h.cad;
        return <span>{price24Low ? this.convertNumToPrice(price24Low) + "$" : "-"} <br /> {price24High ? this.convertNumToPrice(price24High) + "$" : "-"}</span>
    }

    getCoin24mc(coin_market_data) {
        let mc24 = coin_market_data.market_cap_change_24h_in_currency && coin_market_data.market_cap_change_24h_in_currency.cad;
        let mc24Perc = coin_market_data.market_cap_change_percentage_24h;

        if (mc24 && mc24Perc) {
            return <span className={mc24 >= 0 ? 'price-green' : 'price-red'}>
                {this.incDecArrow(mc24)} {this.convertNumToPrice(mc24)}$
                    <br />
                {this.incDecArrow(mc24Perc)} {this.convertNumToPerc(mc24Perc)}%
                    </span>;
        } else {
            return <span> - <br /> - </span>;
        }
    }

    getCoinATLowHigh(coin_market_data) {
        let priceATLow = coin_market_data.atl && coin_market_data.atl.cad;
        let priceATHigh = coin_market_data.ath && coin_market_data.ath.cad;
        return <span>{priceATLow ? this.convertNumToPrice(priceATLow) + "$" : "-"} <br /> {priceATHigh ? this.convertNumToPrice(priceATHigh) + "$" : "-"}</span>
    }

    getCoinMarketcap(coin_market_data) {
        let marketCap = coin_market_data.market_cap && coin_market_data.market_cap.cad;
        return <span>{marketCap ? this.convertNumToPrice(marketCap) + "$" : "-"}</span>;
    }

    getCoinTotalVolume(coin_market_data) {
        let totalVolume = coin_market_data.total_volume && coin_market_data.total_volume.cad;
        return <span>{totalVolume ? this.convertNumToPrice(totalVolume) + "$" : "-"}</span>;
    }


    getCoinCircSupply(coin_market_data) {
        let circSupply = coin_market_data.circulating_supply && coin_market_data.circulating_supply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return <span>{circSupply ? circSupply : "-"}</span>;
    }

    getCoinTotalSupply(coin_market_data) {
        let totalSupply = coin_market_data.total_supply && coin_market_data.total_supply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return <span>{totalSupply ? totalSupply : "-"}</span>;
    }

    render() {
        const { currency, coin_market_data } = this.props;


        return (
            <table className="coin-info-summary">
                <tbody>
                    <tr>
                        <td>24h Price Change</td>
                        <td>{this.getCoinPriceChange(coin_market_data)}</td>
                    </tr>
                    <tr>
                        <td>24h Low/High</td>
                        <td>{this.getCoin24LowHigh(coin_market_data)}</td>
                    </tr>
                    <tr>
                        <td>24h Market Cap</td>
                        <td>{this.getCoin24mc(coin_market_data)}</td>
                    </tr>
                    <tr>
                        <td>All-Time Low/High</td>
                        <td>{this.getCoinATLowHigh(coin_market_data)}</td>
                    </tr>
                    <tr>
                        <td>Market Cap</td>
                        <td>{this.getCoinMarketcap(coin_market_data)}</td>
                    </tr>
                    <tr>
                        <td>Total Volume</td>
                        <td>{this.getCoinTotalVolume(coin_market_data)}</td>
                    </tr>
                    <tr>
                        <td>Circulating Supply</td>
                        <td>{this.getCoinCircSupply(coin_market_data)}</td>
                    </tr>
                    <tr>
                        <td>Total Supply</td>
                        <td>{this.getCoinTotalSupply(coin_market_data)}</td>
                    </tr>
                    <tr>
                        <td>Last Updated {this.getTimeZone(coin_market_data)}</td>
                        <td>{this.getCoinLastUpdate(coin_market_data)}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default CoinInfoSummary;


