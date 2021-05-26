import React, { Component } from 'react';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-moment';


class HistoryChart extends Component {

    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    getTimeData(data) {
        return data.map(el => el[0]);
    }

    getValueData(data) {
        return data.map(el => parseFloat(el[1]).toFixed(2));
    }

    getVolumeYMax(){
        return Math.max(...this.props.chartPriceData.total_volumes.map(el => el[1]));
    }

    getPriceYMax(){
        return Math.max(...this.props.chartPriceData.prices.map(el => el[1]));
    }

    getPriceYMin(){
        return Math.min(...this.props.chartPriceData.prices.map(el => el[1]));
    }

    convertNumToPrice(x) {
        return Number.parseFloat(x).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    createHistoryChart(){
        this.myChart = new Chart(this.chartRef.current, {
            data: {
                labels: this.getTimeData(this.props.chartPriceData.prices),
                datasets: [
                {
                    label: "Price",
                    data: this.getValueData(this.props.chartPriceData.prices),
                    type: 'line',
                    
                    backgroundColor: `${this.props.fluctuationColor}`,
                    borderColor: `${this.props.fluctuationColor}`,
                    borderWidth: 1,
                    pointRadius: 0,
                    pointHitRadius: 10,
                    pointHoverRadius: 7,
                    pointHoverBorderColor: 'rgba(255, 255, 255, 0.51)',
                    pointHoverBorderWidth: '5',
                    pointHoverBackgroundColor: `${this.props.fluctuationColor}`,
                },
                {
                    label: "Volume",
                    data: this.getValueData(this.props.chartPriceData.total_volumes),
                    type: 'bar',

                    backgroundColor: 'rgba(0, 0, 80, 0.30)',
                    hoverBackgroundColor:'rgba(0, 0, 80, 0.90)', 
                    yAxisID: 'volume-y-axis',
                    barThickness: 4,
                    barPercentage: 1,
                },
                ]
            },
            options: {
                scales: {
                    x: {
                        ticks: {
                            maxTicksLimit: 12,
                        },
                        grid: {
                            display: false,
                        },
                        type: 'time',
                        
                        time: {
                            unit: `${this.props.timeUnit}`,
                        },
                        
                    },
                    y: {
                        ticks: {
                            callback: function (value, index, values) {
                                return `$${Number.parseFloat(value).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
                            }
                        },
                        suggestedMin: `${this.getPriceYMin() - ((this.getPriceYMax() - this.getPriceYMin())*0.15)}`,
                        suggestedMax: `${this.getPriceYMax() + ((this.getPriceYMax() - this.getPriceYMin())*0.05)}`,
                    },
                    'volume-y-axis': {
                        position: 'right',
                        grid: {
                            display: false,
                        },
                        display: false,
                        suggestedMax: `${this.getVolumeYMax() * 6}`,
                    }
                },
                lineHeightAnnotation: {
                    always: true,
                    hover: false,
                    lineWeight: 1.5
                },
                animation: { duration: 2000 },
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip:{
                        caretSize: 0,
                        callbacks:{
                            label: function(context) {
                                var value = context.parsed.y;
                                return `$${Number.parseFloat(value).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
                            }
                        }
                    }
                },
                interaction:{
                    mode:'index',
                    intersect: true,
                },
            },
        });
    }


    componentDidMount() {
        Chart.register(...registerables);
        this.createHistoryChart();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.chartPriceData !== prevProps.chartPriceData) {
            this.myChart.destroy();
            this.createHistoryChart();
        }
    }

    render() {
        return (
            <div className="history-chart">
                <canvas id="myChart" ref={this.chartRef} width="100%" height="75%"></canvas>
            </div>
        );
    }
}

export default HistoryChart;