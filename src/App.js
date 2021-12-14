import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Friends Database</h1>
        <Link to='/login'>Login</Link>
        <Link to='/login'>Friend List</Link>
        <Link to='/login'>Add Friend</Link>
        <Link to='/login'>Logout</Link>
      </header>
      <h1>Login</h1>
      <form>
        <label>Username &nbsp;</label>
        <input />
        <label>Password &nbsp;</label>
        <input />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
