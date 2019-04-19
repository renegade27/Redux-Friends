import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './views/PrivateRoute';
import FriendsList from './views/FriendsList';
import Login from './views/Login';
import { login } from './actions';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            user : '',
            isLoggedIn : null
        }
    }

    render() {
        return (
            <Router>
              <div className="app-wrapper">
                <Route exact path='/' component={Login} />
                <PrivateRoute exact path='/friendslist' component={FriendsList} />
              </div>
            </Router>
        );
    }

}

export default App
