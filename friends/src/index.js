import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { customMiddleware } from './customMiddleware';
import { friendsReducer } from './reducers';

const store = createStore(friendsReducer, applyMiddleware(
    thunk, logger, customMiddleware
));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
