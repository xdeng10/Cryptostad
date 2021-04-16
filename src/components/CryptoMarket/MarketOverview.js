import React, { Component } from 'react';
import axios from 'axios';
import './MarketOverview.css';
import CoinOverview from './CoinOverview';

const Loader = () => (
    <div class="divLoader">
        <svg class="svgLoader" viewBox="0 0 100 100" width="2em" height="2em">
            <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
        </svg>
    </div>
);


class MarketOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: [],
            search: '',
            order: 'market_cap_desc',
            loading: true
        };
    }

    setCoins(coins) {
        this.setState({ coins: coins });
    }
    setSearch(search) {
        this.setState({ search: search });
    }
    setOrder(order) {
        this.setState({ order: order });
    }
    setLoading(loading) {
        this.setState({ loading: loading });
    }

    handleOrder(category) {
        switch (category) {
            case 'market-cap':
                this.setOrder((this.state.order === 'market_cap_desc') ? 'market_cap_asc' : 'market_cap_desc');
                break;
            case 'volume':
                this.setOrder((this.state.order === 'volume_desc') ? 'volume_asc' : 'volume_desc');
                break;
            default:
                this.setOrder('market_cap_asc');
        };
    }


    fetchMarketList() {
        this.setLoading(true);
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=${this.state.order}&per_page=100&page=1&sparkline=false`)
            .then(res => {
                this.setCoins(res.data);
                this.setLoading(false);
            }).catch((error) => {
                alert(error);
            });
    }

    getFilteredCoins() {
        return this.state.coins.filter(coin => {
            return coin.name.toLowerCase().includes(this.state.search.toLowerCase())
        }).map(coin => {
            return (
                <CoinOverview key={coin.id}
                    name={coin.name}
                    image={coin.image}
                    price={coin.current_price}
                    symbol={coin.symbol}
                    volume={coin.total_volume}
                    priceChangePercent={coin.price_change_percentage_24h}
                    marketcap={coin.market_cap} />
            );
        });
    }

    componentDidMount() {
        this.fetchMarketList();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.order !== prevState.order) {
            this.fetchMarketList();
        }
    }

    render() {
        return (
            <div>
                <div>
                    <form className='mb3'>
                        <h2>Search a currency</h2>
                        <input
                            className='search-bar'
                            type="text"
                            placeholder="Search"
                            onChange={(event) => this.setSearch(event.target.value)}
                        />
                    </form>
                </div>
                <div className="market-container">
                    <div className="market-table">
                        <div className='coin-row coin-heading'>
                            <div className="coin-logo"></div>
                            <div className="coin-name"><h3>Name</h3></div>
                            <div className="coin-sym"><p>SYM</p></div>
                            <div className="coin-price"><p>Price</p></div>
                            <div className="coin-volume cursor-pointer"
                                onClick={() => this.handleOrder("volume")}>
                                <p>Volume(24h) &#8597;</p>
                            </div>
                            <div className="coin-change"><p>Change(24h)</p></div>
                            <div className="coin-market-cap cursor-pointer"
                                onClick={() => this.handleOrder("market-cap")}>
                                <p>Market Cap &#8597;</p>
                            </div>
                        </div>
                        {
                            this.state.loading ?
                                (
                                    <div className='coin-row'>
                                        <div className="coin-logo"><Loader /></div>
                                        <div className="coin-name"><Loader /></div>
                                        <div className="coin-sym"><Loader /></div>
                                        <div className="coin-price"><Loader /></div>
                                        <div className="coin-volume"><Loader /></div>
                                        <div className="coin-change"><Loader /></div>
                                        <div className="coin-market-cap"><Loader /></div>
                                    </div>
                                )
                                :
                                (
                                    this.getFilteredCoins()
                                )
                        }
                    </div>
                </div>
            </div>
        );
    }
}


export default MarketOverview;
