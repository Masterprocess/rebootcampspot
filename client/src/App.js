import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
<<<<<<< HEAD
import Footer from './components/Footer';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Stats from './pages/Stats';
import NoMatch from '/pages/NoMatch';
=======
import Panel from './components/Panel';
import Footer from './components/Footer';
import Form from './components/Form';
import Grid from './components/Grid';
import Jumbotron from './components/Jumbotron';
import List from './components/List';
import LoginForm from './components/LoginForm';
//import Calendar from './pages/Calendar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Main from './pages/Main';
import Stats from './pages/Stats';


>>>>>>> chris

const App = () =>
  <Router>
    <div>
      <Nav />
      <Panel />
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/stats" component={Stats} />
        <Route component={NoMatch} />
=======
        const App = () =>
  <Router>
    <div>
      <Nav/>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/Dashboard" component={Dashboard} />

        <Route exact path="/stats" component={Stats} />
      </div>
      <Footer />
    </div>
  </Router>;

export default App;

>>>>>>> chris
      </Switch>
      <Footer />
    </div>
  </Router>;

export default App;
