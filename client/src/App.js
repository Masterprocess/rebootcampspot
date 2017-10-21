import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
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



const App = () =>
  <Router>
    <div>
      <Nav />
      <Panel />
      <Switch>
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

      </Switch>
    </div>
  </Router>;

export default App;
