import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import './App.css';
import Login from './components/login/Login'
import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home';
import NewTask from './components/home/NewTask';

localStorage.user = "ECI";
localStorage.email = "eci@escuela.co";
localStorage.pd = "v13";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: localStorage.isLoggedIn }
    this.handleLoginApp = this.handleLoginApp.bind(this);
  }

  render() {


    const items = [
      {
        "description": "Implement login view ",
        "responsible": {
          "name": "ECI",
          "email": "eci@escuela.co"
        },
        "status": "ready",
        "dueDate": 156464645646
      },
      {
        "description": "Implement login controller",
        "responsible": {
          "name": "ECI",
          "email": "eci@escuela.co"
        },
        "status": "done",
        "dueDate": 1581066323
      },
      {
        "description": "Facebook integration ",
        "responsible": {
          "name": "ECI",
          "email": "eci@escuela.co"
        },
        "status": "progress",
        "dueDate": 1588871490
      },
      {
        "description": "Login integration ",
        "responsible": {
          "name": "ECI",
          "email": "eci@escuela.co"
        },
        "status": "ready",
        "dueDate": 1597079490
      }

    ];

    if(!this.state.isLoggedIn){
      // GUARDANDO DATOS
      localStorage.setItem('items', JSON.stringify(items));
    }
    
    

    const LoginView = () => (
      <Login funct={this.handleLoginApp.bind(this)} />
    );

    const HomeView = () => (
      <Home />
    );

    const NewTaskView = () => (
      <NewTask />
    );



    return (

      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={LoginView} />
            <Route exact path="/login" component={LoginView} />
            <Route path="/home" component={HomeView} />
            <Route path="/new" component={NewTaskView} />
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
    } else {
      window.location.replace("/")
    }

  }


}

export default App;
