import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';
import Header from './components/Header';



function App() {
  return (
    
        <div className="App">
        <Header />
        <Switch>
          <PrivateRoute path='/friendlist' component={FriendList} />
          <PrivateRoute path='/logout' component={Logout} />
          <Route path='/addfriend' component={AddFriend} />
          <Route path='/login' component={Login} />
          <Route exact path='/' component={Login} />
        </Switch>
      </div>
    
  );
}

export default App;
