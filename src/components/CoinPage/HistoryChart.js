import React, { Component } from 'react';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-moment';




class HistoryChart extends Component {

    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    formatPriceData(data) {
        return data.map(el => {
            return {
                //x: moment(el[0]).format('HH:mm'),
                x: el[0],
                y: el[1].toFixed(2),
            }
        })
    }

    getTimeData(data) {
        return data.map(el => el[0]);
    }

    getPriceData(data) {
        return data.map(el => el[1].toFixed(2));
    }

    getVolumeYMax(){
        return Math.max(...this.props.chartPriceData1.total_volumes.map(el => el[1]));
    }

    getPriceYMax(){
        return Math.max(...this.props.chartPriceData1.prices.map(el => el[1]));
    }

    getPriceYMin(){
        return Math.min(...this.props.chartPriceData1.prices.map(el => el[1]));
    }

    convertNumToPrice(x) {
        return Number.parseFloat(x).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    componentDidMount() {
        Chart.register(...registerables);

        this.myChart = new Chart(this.chartRef.current, {

            data: {
                labels: this.getTimeData(this.props.chartPriceData1.prices),
                datasets: [{
                    label: "Price",
                    data: this.getPriceData(this.props.chartPriceData1.prices),
                    type: 'line',
                    
                    backgroundColor: '#fff',
                    borderColor: 'rgba(0, 0, 80, 0.91)',
                    borderWidth: 1,
                    pointRadius: 0,
                    pointHitRadius: 10,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: 'rgba(0, 0, 80, 0.31)',
                    pointHoverBorderWidth: '5',
                    pointHoverBackgroundColor: 'rgba(0, 0, 80, 0.91)',

                },
                {
                    label: "Volume",
                    data: this.getPriceData(this.props.chartPriceData1.total_volumes),
                    type: 'bar',
                    backgroundColor: 'rgba(0, 0, 80, 0.30)',
                    hoverBackgroundColor:'rgba(0, 0, 80, 0.90)', 
                    yAxisID: 'volume-y-axis',
                    barThickness: 5,
                },
                ]
            },
            options: {
                scales: {
                    x: {
                        ticks: {
                            maxTicksLimit: 10,
                        },
                        grid: {
                            display: false,
                        },
                        type: 'time',
                        time: {
                            unit: 'hour'
                        },
                    },
                    y: {
                        ticks: {
                            callback: function (value, index, values) {
                                return `$${Number.parseFloat(value).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
                            }
                        },
                        suggestedMin: `${this.getPriceYMin() - ((this.getPriceYMax() - this.getPriceYMin())*0.15)}`,
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

    render() {
        return (
            <div className="history-chart">
                <canvas id="myChart" ref={this.chartRef} width="100%" height="75%"></canvas>
            </div>
        );
    }
}

export default HistoryChart;


