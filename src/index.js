import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

<<<<<<< HEAD
let app = <App/>
// let hello = <h1>Under Construction</h1>
=======
// let app = <App/>
let app = <h1>Under Construction</h1>
>>>>>>> 76829f0b7451e43ae9e048f05e1e6a3748b2af1c

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
