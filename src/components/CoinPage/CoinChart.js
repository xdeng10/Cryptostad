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
            coinChartData1d: [],
            coinChartData1w: [],
            coinChartData1m: [],
            coinChartData1y: [],
            coinChartDataMax: [],
            timeInterval: "1d",
            chartLoading: true
        };
    }

    setCoinID(coinID) {
        this.setState({ coinID: coinID });
    }
    setCurrency(currency) {
        this.setState({ currency: currency });
    }
    setCoinChartData(data1d, data1w, data1m, data1y, dataMax) {
        this.setState({ coinChartData1d: data1d });
        this.setState({ coinChartData1w: data1w });
        this.setState({ coinChartData1m: data1m });
        this.setState({ coinChartData1y: data1y });
        this.setState({ coinChartDataMax: dataMax });
    }
    setTimeInterval(timeInterval) {
        this.setState({ timeInterval: timeInterval });
    }
    setChartLoading(chartLoading) {
        this.setState({ chartLoading: chartLoading });
    }


    fetchCoinChart() {
        this.setChartLoading(true);
        const requestChart1d = axios.get(`https://api.coingecko.com/api/v3/coins/${this.state.coinID}/market_chart?vs_currency=${this.state.currency}&days=1`);
        const requestChart1w = axios.get(`https://api.coingecko.com/api/v3/coins/${this.state.coinID}/market_chart?vs_currency=${this.state.currency}&days=7`);
        const requestChart1m = axios.get(`https://api.coingecko.com/api/v3/coins/${this.state.coinID}/market_chart?vs_currency=${this.state.currency}&days=30`);
        const requestChart1y = axios.get(`https://api.coingecko.com/api/v3/coins/${this.state.coinID}/market_chart?vs_currency=${this.state.currency}&days=365`);
        const requestChartMax = axios.get(`https://api.coingecko.com/api/v3/coins/${this.state.coinID}/market_chart?vs_currency=${this.state.currency}&days=max`);

        axios.all([requestChart1d, requestChart1w, requestChart1m, requestChart1y, requestChartMax])
            .then((res) => {
                this.setCoinChartData(res[0].data, res[1].data, res[2].data, res[3].data, res[4].data);
                this.setChartLoading(false);
            }).catch((error) => {
                alert(error);
            });
    }

    waitChartLoading() {
        return <img width="10%" src={ThreeDots} alt="Loading..." />;
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
        let interval = this.props.coin_market_data.price_change_24h_in_currency;
        let intervalPerc = this.props.coin_market_data.price_change_percentage_24h
        switch (this.state.timeInterval) {
            case "1d":
                interval = this.props.coin_market_data.price_change_24h_in_currency;
                intervalPerc = this.props.coin_market_data.price_change_percentage_24h;
                break;
            case "1w":
                interval = this.props.coin_market_data.price_change_percentage_7d_in_currency;
                intervalPerc = this.props.coin_market_data.price_change_percentage_7d;
                break;
            case "1m":
                interval = this.props.coin_market_data.price_change_percentage_30d_in_currency;
                intervalPerc = this.props.coin_market_data.price_change_percentage_30d;
                break;
            case "1y":
                interval = this.props.coin_market_data.price_change_percentage_1y_in_currency;
                intervalPerc = this.props.coin_market_data.price_change_percentage_1y;
                break;
            case "max":
                interval = false;
                intervalPerc = false;
                break;
            default:
                interval = this.props.coin_market_data.price_change_24h_in_currency;
                intervalPerc = this.props.coin_market_data.price_change_percentage_24h;
        }

        let priceChange = interval && interval.cad;
        let priceChangePerc = intervalPerc;

        if (priceChange && priceChangePerc) {
            return <span className={priceChange >= 0 ? 'price-green' : 'price-red'}>
                {this.incDecArrow(priceChange)} {this.convertNumToPrice(priceChange)}$
                &nbsp;&nbsp;
                {this.incDecArrow(priceChangePerc)} {this.convertNumToPerc(priceChangePerc)}%
                </span>;
        } else {
            return <span> - &nbsp;&nbsp;  -</span>;
        }
    }

    getIntervalChartData() {
        switch (this.state.timeInterval) {
            case "1d":
                return this.state.coinChartData1d;
            case "1w":
                return this.state.coinChartData1w;
            case "1m":
                return this.state.coinChartData1m;
            case "1y":
                return this.state.coinChartData1y;
            case "max":
                return this.state.coinChartDataMax;
            default:
                return this.state.coinChartData1d;
        }
    }

    getFluctuationColor() {
        let interval = this.props.coin_market_data.price_change_24h_in_currency;
        switch (this.state.timeInterval) {
            case "1d":
                interval = this.props.coin_market_data.price_change_24h_in_currency;
                break;
            case "1w":
                interval = this.props.coin_market_data.price_change_percentage_7d_in_currency;
                break;
            case "1m":
                interval = this.props.coin_market_data.price_change_percentage_30d_in_currency;
                break;
            case "1y":
                interval = this.props.coin_market_data.price_change_percentage_1y_in_currency;
                break;
            case "max":
                interval = false;
                break;
            default:
                interval = this.props.coin_market_data.price_change_24h_in_currency;
        }

        let priceChange = interval && interval.cad;

        if (priceChange < 0) {
            return "red";
        } else {
            return "green";
        }
    }

    getTimeUnit() {
        switch (this.state.timeInterval) {
            case "1d":
                return "hour";
            case "1w":
                return "day";
            case "1m":
                return "day";
            case "1y":
                return "month";
            case "max":
                return "month";
            default:
                return "hour";
        }
    }

    componentDidMount() {
        this.fetchCoinChart();
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
                            <button
                                onClick={() => this.setTimeInterval("1d")}
                                className={(this.state.timeInterval === "1d" ? "white" : "")}>
                                24h
                            </button>
                            <button
                                onClick={() => this.setTimeInterval("1w")}
                                className={(this.state.timeInterval === "1w" ? "white" : "")}>
                                1w
                            </button>
                            <button
                                onClick={() => this.setTimeInterval("1m")}
                                className={(this.state.timeInterval === "1m" ? "white" : "")}>
                                1m
                            </button>
                            <button
                                onClick={() => this.setTimeInterval("1y")}
                                className={(this.state.timeInterval === "1y" ? "white" : "")}>
                                1y
                            </button>
                            <button
                                onClick={() => this.setTimeInterval("max")}
                                className={(this.state.timeInterval === "max" ? "white" : "")}>
                                max
                            </button>
                        </div>
                        <div className="price-fluctuation">
                            {this.getCoinPriceChange()}
                        </div>
                    </div>
                    <HistoryChart
                        coinID={this.state.coinID}
                        chartPriceData={this.getIntervalChartData()}
                        fluctuationColor={this.getFluctuationColor()}
                        timeUnit={this.getTimeUnit()}
                    />
                </div>
        );
    }
}

export default CoinChart;

