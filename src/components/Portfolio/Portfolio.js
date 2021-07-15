import React, { Component } from 'react';
import './Portfolio.css';
import RegistrationOffer from './RegistrationOffer';


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    portfolioSummary() {
        return (
            <div>
                portfolio summary
            </div>);
    }

    render() {
        return (
            <main>
                {this.props.userSignedIn ?
                    this.portfolioSummary()
                    :
                    <RegistrationOffer />
                }
            </main>

        );
    }
}

export default Portfolio;