import React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';
import Signup from './Signup';
import EditProfile from './EditProfile';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/profile' exact>
          <Profile />
        </Route>
        <Route path='/editProfile' exact>
          <EditProfile />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/signup' exact>
          <Signup />
        </Route>
      </Switch>
    </Router>

  )
}

export default App;