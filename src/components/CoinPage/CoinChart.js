import React, { Component } from 'react';
import axios from 'axios';
import './CoinChart.css';
import './CoinPage';
import ThreeDots from './three-dots.svg';
import HistoryChart from './HistoryChart.js'


class CoinChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            coinID: this.props.coinID,
            currency: 'cad',
            coinChartData1: [],
            coinChartData7: [],
            coinChartData30: [],
            timeInterval: "1",
            chartLoading: true
        };
    }

    setCoinID(coinID) {
        this.setState({ coinID: coinID });
    }
    setCurrency(currency) {
        this.setState({ currency: currency });
    }
    setCoinChartData(data1, data7, data30) {
        this.setState({ coinChartData1: data1 });
        this.setState({ coinChartData7: data7 });
        this.setState({ coinChartData30: data30 });
    }
    setTimeInterval(timeInterval) {
        this.setState({ timeInterval: timeInterval });
    }
    setChartLoading(chartLoading) {
        this.setState({ chartLoading: chartLoading });
    }


    fetchCoinChart() {
        this.setChartLoading(true);
        const requestChart1 = axios.get(`https://api.coingecko.com/api/v3/coins/${this.state.coinID}/market_chart?vs_currency=${this.state.currency}&days=1`);
        const requestChart7 = axios.get(`https://api.coingecko.com/api/v3/coins/${this.state.coinID}/market_chart?vs_currency=${this.state.currency}&days=7`);
        const requestChart30 = axios.get(`https://api.coingecko.com/api/v3/coins/${this.state.coinID}/market_chart?vs_currency=${this.state.currency}&days=30`);

        axios.all([requestChart1, requestChart7, requestChart30])
            .then((res) => {
                this.setCoinChartData(res[0].data, res[1].data, res[2].data);
                this.setChartLoading(false);
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

    

    getCoinPriceChange() {
        console.log(this.props.coin_market_data);
        
        let priceChange24 = this.props.coin_market_data.price_change_24h_in_currency && this.props.coin_market_data.price_change_24h_in_currency.cad;
        let priceChange24Perc = this.props.coin_market_data.price_change_percentage_24h;

        if (priceChange24 && priceChange24Perc) {
            return <span className={priceChange24 >= 0 ? 'price-green' : 'price-red'}>
                {this.incDecArrow(priceChange24)} {this.convertNumToPrice(priceChange24)}$
                &nbsp;&nbsp;   
                {this.incDecArrow(priceChange24Perc)} {this.convertNumToPerc(priceChange24Perc)}%
                </span>;
        } else {
            return <span> - <br /><br /> -</span>;
        }

    }


    waitChartLoading() {
        return <img width="10%" src={ThreeDots} alt="Loading..." />;
    }

    componentDidMount() {
        this.fetchCoinChart();
    }


    componentDidUpdate(prevProps, prevState) {
        if (this.state.timeInterval !== prevState.timeInterval) {
        }
    }

    render() {
        return (
            (this.state.chartLoading) ?
                <div className="coin-info-graph">
                    {this.waitChartLoading()}
                </div>
                :
                <div className="coin-info-graph">
                    <div className="chart-header">
                        <div className="time-interval-selector">
                            <button className="white">24h</button>
                            <button>1w</button>
                            <button>1m</button>
                            <button>1y</button>
                        </div>
                        <div className="price-fluctuation">
                            {this.getCoinPriceChange()}
                        </div>
                    </div>
                    <HistoryChart
                        coinID={this.state.coinID}
                        chartPriceData1={this.state.coinChartData1}
                    />
                </div>
        );
    }
}

export default CoinChart;

//https://www.createwithdata.com/react-chartjs-dashboard/

