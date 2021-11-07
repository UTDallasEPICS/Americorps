//*
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//*/
import VistaHome from '../../components/Vista/VistaHome';

// **************************incllude props
class VistaPage extends React.Component {

    /*
    0=vista home page
    1=vista clockIn
    2=vista narratives
    3=vista schedule
    4=vista settings
    //*/ 
    render(){
    return (
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path='' exact component={VistaHome}/>
          {/* <Route path='/' exact component={AdminHome}/>
          <Route path='/users' exact component={Users}/>
          <Route path='/info' exact component={Info}/>*/}
          {/* <Route path='/admin' exact component={AdminPage}/> */}
        </Switch>
      </Router>
      
    )
    }
}

export default VistaPage;
