import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/index.css';
import App from './startup/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
