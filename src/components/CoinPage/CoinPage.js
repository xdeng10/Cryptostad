import React, { Component } from 'react';
import axios from 'axios';
import './CoinPage.css';
import CoinInfoSummary from './CoinInfoSummary';
import CoinChart from './CoinChart';
import { withRouter } from 'react-router';




class CoinPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinID: '',
            currency: 'cad',
            coin: {},
            coin_market_data: {},
            loading: false
        };
    }

    setCoinID(coinID) {
        this.setState({ coinID: coinID });
    }
    setCurrency(currency) {
        this.setState({ currency: currency });
    }
    setCoin(coin) {
        this.setState({ coin: coin });
    }
    setCoin_market_data(coin_market_data) {
        this.setState({ coin_market_data: coin_market_data });
    }
    setLoading(loading) {
        this.setState({ loading: loading });
    }

    fetchCoinInfo() {
        this.setLoading(true);
        axios.get(`https://api.coingecko.com/api/v3/coins/${this.state.coinID}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`)
            .then(res => {
                this.setCoin(res.data);
                this.setCoin_market_data(this.state.coin.market_data)
                this.setLoading(false);
            }).catch((error) => {
                alert(error);
            });
    }

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

    getCoinLogoAlt() {
        return this.state.coin.name + " Logo";
    }

    getCoinSymbol() {
        return (this.state.coin.symbol) ? (this.state.coin.symbol && this.state.coin.symbol.toUpperCase()) : "-";
    }

    getCoinCurrPrice() {
        let current_price = this.state.coin_market_data.current_price &&
            this.state.coin_market_data.current_price.cad;

        return (current_price) ? this.convertNumToPrice(current_price) : "NaN";
    }

    getPriceChange24() {
        let priceChange24 = this.state.coin_market_data.price_change_24h_in_currency && this.state.coin_market_data.price_change_24h_in_currency.cad;
        let priceChange24Perc = this.state.coin_market_data.price_change_percentage_24h;

        if (priceChange24 && priceChange24Perc) {
            return <span className={priceChange24 >= 0 ? 'coin-price-change price-green' : 'coin-price-change price-red'}>
                {this.incDecArrow(priceChange24)} {this.convertNumToPerc(priceChange24Perc)}%
                    </span>;
        } else {
            return <span className="coin-price-change"> - </span>;
        }
    }


    componentDidMount() {
        this.setCoinID(this.props.match.params.cryptoid);
    }


    componentDidUpdate(prevProps, prevState) {
        if (this.state.coinID !== prevState.coinID) {
            this.fetchCoinInfo();
        }
    }


    render() {
        return (
            <main>
                <div className="coin-header-container">
                    <div className="coin-header">
                        <div className="coin-title">
                            <img className="coin-logo" src={this.state.coin.image && this.state.coin.image.large} alt={this.getCoinLogoAlt()} />
                            <span className="coin-name">{this.state.coin.name}</span>
                            <span className="coin-symbol">{this.getCoinSymbol()}</span>
                            {this.getPriceChange24()}
                        </div>
                        <div>
                            Add to Watchlist
                        </div>
                    </div>
                </div>
                <div className="coin-subheader-container">
                    <div className="coin-subheader">
                        <span className="coin-currency">CA</span>
                        <span className="coin-price"> {this.getCoinCurrPrice()}$</span>
                    </div>
                </div>
                <div className="coin-info-container">
                    <div className="coin-info">
                        <CoinInfoSummary
                            currency={this.state.currency}
                            coin_market_data={this.state.coin_market_data}
                        />
                        <CoinChart
                            coinID = {this.props.match.params.cryptoid}
                        />
                    </div>
                </div>



            </main>
        );
    }
}

export default withRouter(CoinPage);
