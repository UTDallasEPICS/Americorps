/*
import React from 'react';
import Navbar from './components/Navbar';
*/
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';
//import Home from './pages/Home';
/*
import Info from './pages/Info';
import User from './pages/User';
import AdminHome from './pages/AdminPage/admin-home';
import Users from './pages/AdminPage/admin-users-list';
*/

import HomePage from '../src/pages/Home/HomePage';
import VistaPage from './pages/Vista/VistaPage';
import AdminPage from './pages/Admin/AdminPage';
<<<<<<< HEAD
import VistaClockIn from './components/Vista/VistaClockIn';
import VistaSettings from './components/Vista/VistaSettings';
import VistaNarratives from './components/Vista/VistaNarratives';
import VistaSchedule from './components/Vista/VistaSchedule'; 
=======
>>>>>>> VistaSettings

/*
this function sets up the naviation for the different screens
mainly, this includes:

Home page:  this is where users can log in
<<<<<<< HEAD
Vista pages: allows for navigation to (clock in, schedule, settings, narratives)
Admin pages: allows for navigation to (search vistas, search admin, search supervisor)
=======
Vista page: allows for navigation to (clock in, schedule, settings, narratives)
Admin page: 
>>>>>>> VistaSettings
*/

import firebase from 'firebase/app';
import { initializeApp } from "./firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv_Q0TIDOXCyOjb0guTSUbgYNC4_QiwZg",
  authDomain: "epcs-americorps.firebaseapp.com",
  databaseURL: "https://epcs-americorps-default-rtdb.firebaseio.com",
  projectId: "epcs-americorps",
  storageBucket: "epcs-americorps.appspot.com",
  messagingSenderId: "639867939960",
  appId: "1:639867939960:web:1e510c188fd5e37dc1918d",
  measurementId: "G-ZM76V5BY80"
};

initializeApp(firebaseConfig);

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* pages */}
          <Route path='/' exact component={HomePage}/>
          <Route path='/AdminPage' exact component={AdminPage}/>
          <Route path='/VistaPage' exact component={VistaPage}/> 


          {/* Vista components */}
          <Route path='/vistaClockIn' exact component={VistaClockIn}/>
          <Route path='/vistaSchedule' exact component={VistaSchedule}/>
          <Route path='/vistaSettings' exact component={VistaSettings}/>
          <Route path='/vistaNarratives' exact component={VistaNarratives}/>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
