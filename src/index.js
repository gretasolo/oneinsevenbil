import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './serviceWorker'; 
import { initializeFirebase} from './init-fcm'; 

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker()
initializeFirebase()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

//all the things the setup page told to me to add to index.js

