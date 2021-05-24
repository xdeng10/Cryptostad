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
            <Route path="/Home" component={HomePage}></Route>
            <Route path="/About" component={About}></Route>
            <Route path="/Contact" component={Contact}></Route>
            <Route path="/CryptoMarket" component={CryptoMarket}></Route>
            <Route path="/CoinPage" component={CoinPage}></Route>
            <Route path="/Signin" component={Signin}></Route>

          </Switch>
        </div>
      </Router>

    );

  }
}

export default App;
