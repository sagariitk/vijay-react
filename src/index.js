import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Router_App from './Router_App';
import App_with_router from './App_with_router';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Router_App />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App_with_router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
