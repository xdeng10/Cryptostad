import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import CryptoMarket from './components/CryptoMarket/CryptoMarket';
import CoinPage from './components/CoinPage/CoinPage';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';



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
            <Route path="/portfolio" component={Portfolio}></Route>
            <Route path="/cryptomarket" component={CryptoMarket}></Route>
            <Route path="/coin/:cryptoid" component={CoinPage}></Route>
            <Route path="/signin" component={Signin}></Route>
            <Route path="/signup" component={Signup}></Route>
          </Switch>
        </div>
      </Router>

    );

  }
}

export default App;
