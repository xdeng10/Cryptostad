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

    waitChartLoading() {
        return <img width="10%" src={ThreeDots} alt="Loading..." />;
    }

    componentDidMount() {
        this.fetchCoinChart();
    }


    componentDidUpdate(prevProps, prevState) {
        if (this.state.coinID !== prevState.coinID) {
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
                        dfsdfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                        </div>
                    <HistoryChart
                        coinID={this.state.coinID} 
                        chartPriceData1={this.state.coinChartData1.prices}
                    />
                </div>
        );
    }
}

export default CoinChart;

//https://www.createwithdata.com/react-chartjs-dashboard/

