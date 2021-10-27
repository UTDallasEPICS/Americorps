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
import AdminHome from './pages/AdminPage/admin-home';
import Users from './pages/AdminPage/admin-users-list';
//*/

import HomePage from '../src/pages/Home/HomePage';
import VistaPage from './pages/Vista/VistaPage';
import AdminPage from './pages/Admin/AdminPage';
function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={HomePage}/>
          {/* <Route path='/' exact component={AdminHome}/>
          <Route path='/users' exact component={Users}/>
          <Route path='/info' exact component={Info}/>*/}
          <Route path='/admin' exact component={AdminPage}/>
          <Route path='/VistaPage' exact component={VistaPage}/> 
        </Switch>
      </Router>
    </>
  );
}

export default App;
