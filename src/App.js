import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import './App.css';
import Login from './components/login/Login'
import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home';

localStorage.user = "villate";
localStorage.pd = "v13";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: localStorage.isLoggedIn }
    this.handleLoginApp = this.handleLoginApp.bind(this);
  }

  render() {


    const LoginView = () => (
      <Login funct={this.handleLoginApp.bind(this)} />
    );

    const HomeView = () => (
      <Home />
    );


    return (

      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={LoginView} />
            <Route exact path="/login" component={LoginView} />
            <Route path="/home" component={HomeView}/>
          </Switch>
        </div>
      </Router>

    
      );
  }

  handleLoginApp(ans) {
    localStorage.isLoggedIn = ans;
    this.setState({
      isLoggedIn: ans
    });
    if (ans) {
      window.location.replace("/home")
    }

  }


}

export default App;
