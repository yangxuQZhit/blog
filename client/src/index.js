import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AlertDemo1 from './reactstrap-demo/alert/AlertDemo1';
import AlertDemo2 from './reactstrap-demo/alert/AlertDemo2';
import AlertDemo3 from './reactstrap-demo/alert/AlertDemo3';
import AlertDemo4 from './reactstrap-demo/alert/AlertDemo4';
import AlertDemo5 from './reactstrap-demo/alert/AlertDemo5';
import AlertDemo6 from './reactstrap-demo/alert/AlertDemo6';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<AlertDemo6 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
