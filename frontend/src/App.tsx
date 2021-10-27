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
import firebase from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
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

// export const db = firebase.firestore();
// export default firebase;
function App() {

  // const db = getFirestore();

  // const docRef = collection(db,'users');
  // const q = query(docRef, where("password", "==", "12345"));
  // let a;
  // getDocs(q).then(value => { a = value; }).catch(e => { console.log("error: ", e); })
  // console.log(a);

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
