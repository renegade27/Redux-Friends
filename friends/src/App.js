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
                <Route exact path='/' render={(props) => <Login {...props} login={login}/>}/>
                <PrivateRoute exact path='/friendslist' render={(props) => <FriendsList {...props} />} />
              </div>
            </Router>
        );
    }

}

export default App
