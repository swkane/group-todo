import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

ReactDOM.render(
    <App />
  , document.getElementById('root'));
registerServiceWorker();
