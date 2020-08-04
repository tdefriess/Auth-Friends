import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/friends'>Friends</Link>
        </nav>
        <Switch>
          <PrivateRoute exact path='/friends' component={FriendsList} />
          <PrivateRoute path='/friends/add-friend' component={AddFriend} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
