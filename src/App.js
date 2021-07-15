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
  constructor(){
    super();
    this.state = {
      userSignedIn: false,
      user:{
        id: '',
        fname: '',
        lname: '',
        email: '',
        signedin: '',
        joined: '',
      },
    }
  }

  loadUser = (data) => {
    this.setState({
      userSignedIn: true,
      user:{
        id: data.id,
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        signedin: data.signedin,
        joined: data.joined,
      }
  })
  }

  signout = () => {
    this.setState({
      userSignedIn: false,
      user:{
        id: '',
        fname: '',
        lname: '',
        email: '',
        signedin: '',
        joined: '',
      },
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar userSignedIn={this.state.userSignedIn} signout={this.signout}/>
          <Switch>
            <Route path="/" exact component={CryptoMarket}></Route>
            <Route path="/CryptoExchange" component={CryptoMarket}></Route>
            <Route path="/home" component={HomePage}></Route>
            <Route path="/about" component={About}></Route>
            <Route 
              path="/portfolio" 
              render={(props) => (
                <Portfolio {...props} userSignedIn={this.state.userSignedIn}/>
              )}
            ></Route>
            <Route path="/cryptomarket" component={CryptoMarket}></Route>
            <Route path="/coin/:cryptoid" component={CoinPage}></Route>
            <Route 
              path="/signin" 
              render={(props) => (
                <Signin {...props} loadUser={this.loadUser} user={this.state.user}/>
              )}
            ></Route>
            <Route 
              path="/signup" 
              render={(props) => (
                <Signup {...props} loadUser={this.loadUser} user={this.state.user}/>
              )}
            >
            </Route>
          </Switch>
        </div>
      </Router>

    );

  }
}

export default App;
