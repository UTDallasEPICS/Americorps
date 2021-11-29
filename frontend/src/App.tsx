/*
App.tsx
Author:         Backend, Front end
Description:    this class sets up the navigation screens and the conigs for Firebase
props:          none
Date:           fall 2021
//*/
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';
import HomePage from '../src/pages/Home/HomePage';
import VistaPage from './pages/Vista/VistaPage';
import VistaClockIn from './components/Vista/VistaClockIn';
import VistaSettings from './components/Vista/VistaSettings';
import VistaNarratives from './components/Vista/VistaNarratives';
import VistaSchedule from './components/Vista/VistaSchedule'; 
import AdminPage from './pages/Admin/AdminPage';
import AdminResults from './components/Admin/AdminSmallComponents/AdminResults';
import AdminSearch from './components/Admin/AdminSearch';
import { initializeApp } from "./firebase/app";

//firebase config
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

//begin app function
export default function App() {
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
          
          {/* Admin components */}
          <Route path='/adminHome' exact component={AdminPage}/>
          <Route path='/adminSearch' exact component={AdminSearch}/>
          <Route path='/adminResults' exact component={AdminResults}/>

        </Switch>
      </Router>
    </>
  );
}

 