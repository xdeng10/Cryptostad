import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import CryptoMarket from './components/CryptoMarket/CryptoMarket';
import CoinPage from './components/CoinPage/CoinPage';
import Signin from './components/Signin/Signin';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={CryptoMarket}></Route>
            <Route path="/CryptoExchange" component={CryptoMarket}></Route>
            <Route path="/home" component={HomePage}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/cryptomarket" component={CryptoMarket}></Route>
            <Route path="/coin/:cryptoid" component={CoinPage}></Route>
            <Route path="/signin" component={Signin}></Route>

          </Switch>
        </div>
      </Router>

    );

  }
}

export default App;
