import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';



function App() {
  return (
    <Router>
        <div className="App">
        <header>
          <h1>Friends Database</h1>
          <Link to='/login'>Login &nbsp;</Link>
          <Link to='/friendlist'>Friend List &nbsp;</Link>
          <Link to='/addfriend'>Add Friend &nbsp;</Link>
          <Link to='/logout'>Logout &nbsp;</Link>
        </header>

        <Switch>
          <Route path='/friendlist' component={FriendList} />
          <Route path='/login' component={Login} />
          <Route exact path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
