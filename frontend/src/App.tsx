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
// import SettingPage from './pages/Vista/SettingPage';

/*
this function sets up the naviation for the different screens
mainly, this includes:

Home page:  this is where users can log in
Vista page: allows for navigation to (clock in, schedule, settings, narratives)
Admin page: 

*/
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/AdminPage' exact component={AdminPage}/>
          <Route path='/VistaPage' exact component={VistaPage}/> 
          <Route path='/VistaPage/Settings' exact component={VistaPage}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
