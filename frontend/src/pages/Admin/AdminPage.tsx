//*
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AdminHome from '../../components/Admin/AdminHome';


// **************************incllude props
function AdminPage(){
    return (
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path='' exact component={AdminHome}/>
          {/* <Route path='/' exact component={AdminHome}/>
          <Route path='/users' exact component={Users}/>
          <Route path='/info' exact component={Info}/>*/}
          {/* <Route path='/admin' exact component={AdminPage}/> */}
        </Switch>
      </Router>
      
    );
}

export default AdminPage;
