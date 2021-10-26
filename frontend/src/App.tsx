/*
import React from 'react';
import Navbar from './components/Navbar';
//*/
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';
//import Home from './pages/Home';
/*
import Info from './pages/Info';
import User from './pages/User';
import Admin from './pages/AdminPage/Admin'; 
import AdminHome from './pages/AdminPage/admin-home';
import Users from './pages/AdminPage/admin-users-list';
//*/
import './components/AshStyle.css'
import HomePage from '../src/pages/Home/HomePage';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={HomePage}/>
          {/* <Route path='/' exact component={AdminHome}/>
          <Route path='/users' exact component={Users}/>
          <Route path='/info' exact component={Info}/>
          <Route path='/admin' exact component={Admin}/>
          <Route path='/user' exact component={User}/> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
