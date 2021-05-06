import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Info from './pages/Info';
import User from './pages/User';
import Admin from './pages/Admin'; 
import AdminHome from './pages/admin-home';
import Users from './pages/admin-users-list';
import './components/AshStyle.css'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={AdminHome}/>
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
