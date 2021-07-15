import React, { Component } from 'react';
import axios from 'axios';
import './MarketOverview.css';
import CoinOverview from './CoinOverview';

/* Loading circle image */
const Loader = () => (
    <div className="divLoader">
        <svg className="svgLoader" viewBox="0 0 100 100" width="2em" height="2em">
            <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
        </svg>
    </div>
);



class MarketOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: [],
            pageNumber: 1,
            morePage: true,
            prevY: 0,
            search: '',
            order: 'market_cap_desc',
            loading: false
        };
    }

    setCoins(coins) {
        this.setState({ coins: coins });
    }
    setPageNumber(pageNumber) {
        this.setState({ pageNumber: pageNumber });
    }
    setMorePage(morePage) {
        this.setState({ morePage: morePage });
    }
    setPrevY(prevY) {
        this.setState({ prevY: prevY });
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

    fetchMarketList() {
        this.setLoading(true);
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=${this.state.order}&per_page=100&page=${this.state.pageNumber}&sparkline=false`)
            .then(res => {
                if (res.data === []) {
                    this.setMorePage(false);
                }
                this.setCoins([...this.state.coins, ...res.data]);
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
                    id={coin.id}
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

    waitloading() {
        return (
            (this.state.loading) ?
                (
                    <div
                        className='coin-row'
                    >
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
                    <div
                        className='coin-row'
                    >
                        <div className="coin-logo"></div>
                        <div className="coin-name"></div>
                        <div className="coin-sym"></div>
                        <div className="coin-price"></div>
                        <div className="coin-volume"></div>
                        <div className="coin-change"></div>
                        <div className="coin-market-cap"></div>
                    </div>
                )
        );
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


    handleObserver(entities, observer) {
        const y = entities[0].boundingClientRect.y;
        if (this.state.prevY > y) {
            this.setPageNumber(this.state.pageNumber + 1);
            this.fetchMarketList();
        }
        this.setPrevY(y);
    }


    componentDidMount() {
        this.fetchMarketList();

        if (this.state.morePage) {
            var options = {
                root: null,
                rootMargin: "0px",
                threshold: 1.0
            };

            this.observer = new IntersectionObserver( //Listen to changes in target elements
                this.handleObserver.bind(this),
                options
            );
            this.observer.observe(this.loadingRef);
        }
    }


    componentDidUpdate(prevProps, prevState) {
        if (this.state.order !== prevState.order) {
            this.setCoins([]);
            this.setPageNumber(1);
            this.setPrevY(0);
            this.fetchMarketList();
        }
    }


    render() {
        return (
            <div>
                <div>
                    <h1>CryptoMarket</h1>
                    <form className='search-bar-form'>
                        <input
                            className='search-bar'
                            type="text"
                            placeholder=" Search a currency"
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
                            <div className="coin-change"><p>Change(24h)</p></div>
                            <div className="coin-volume cursor-pointer"
                                onClick={() => this.handleOrder("volume")}>
                                <p>Volume &#8597;</p>
                            </div>
                            <div className="coin-market-cap cursor-pointer"
                                onClick={() => this.handleOrder("market-cap")}>
                                <p>Market Cap &#8597;</p>
                            </div>
                        </div>

                        {this.getFilteredCoins()}

                        {this.waitloading()}

                        <div
                            ref={loadingRef => (this.loadingRef = loadingRef)}
                        >
                            <span>&nbsp;</span>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default MarketOverview;

