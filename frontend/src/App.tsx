import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/admin-navbar';
import AdminHome from './pages/admin-home';
import Users from './pages/admin-users-list';
import './components/AshStyle.css'

function App() {
  return (
    <div className="App">
       <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={() => <AdminHome />} />
          <Route path="/Users" exact component={() => <Users />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
