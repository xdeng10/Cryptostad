import React, { Component } from 'react';
import { Chart, registerables } from 'chart.js';
import moment from 'moment';



class HistoryChart extends Component {

    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    formatPriceData(data) {

        return data.map(el => {
            //console.log(el[0]);
            return {
                x: moment(el[0]).format('HH:mm'),
                //x: el[0],
                y: el[1].toFixed(2),
            }
        })
    }


    componentDidMount() {
        Chart.register(...registerables);

        this.myChart = new Chart(this.chartRef.current, {

            type: 'line',

            data: {
                datasets: [{
                    label: "Price",
                    data: this.formatPriceData(this.props.chartPriceData1),
                    backgroundColor: '#fff',
                    borderColor: 'rgba(0, 0, 80, 0.91)',
                    borderWidth: 1,
                    pointRadius: 0,
                    pointHitRadius: 100,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: '#fff',
                    pointHoverBorderWidth: '2',
                    pointHoverBackgroundColor: 'rgba(0, 0, 80, 0.91)',
                    fill: {
                        target: 'origin',
                        above: 'rgba(0, 0, 80, 0.31)',   // Area above the origin
                    },
                }]
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

                    }
                    /*
                    xAxes: [
                        {
                            ticks: {
                                
                                stepSize: 10000,
                                autoSkip: true,
                                maxTicksLimit: 20,
                                
                                // For a category axis, the val is the index so the lookup via getLabelForValue is needed
                                callback: function (val, index) {
                                    // Hide the label of every 2nd dataset
                                    return index % 200 === 0 ? this.getLabelForValue(val) : '';
                                },
                                color: 'red',
                                
                            },
                            type: 'time',
                            time: {
                                
                                unit: 'minute',
                                format:'HH:mm',
                                stepSize:60,
                                displayFormats: {
                                    hour: 'HH:mm',
                                    minute: 'HH:mm',
                                }
                                
                            },
                        }
                    ],
                    yAxes: [
                        {
                            ticks: {
                                min: 0
                            }
                        }
                    ]
                    */

                },
                lineHeightAnnotation: {
                    always: true,
                    hover: false,
                    lineWeight: 1.5
                },
                animation: { duration: 2000 },
                maintainAspectRatio: false,
                responsive: true,
            }

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

//https://www.createwithdata.com/react-chartjs-dashboard/

//                x: moment(el[0]).format('HH:mm'),
