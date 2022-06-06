import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(, document.getElementById('root'));
ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
