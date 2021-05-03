import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Users from './pages/Users';
import Info from './pages/Info';
import Admin from './pages/Admin';
import User from './pages/User';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/users' exact component={Users}/>
          <Route path='/info' exact component={Info}/>
          <Route path='/admin' exact component={Admin}/>
          <Route path='/user' exact component={User}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
