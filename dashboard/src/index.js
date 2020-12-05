import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Store from './state/Store';
import AlertInfo from './components/layouts/alertinfo/Alert';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js')
        .then(function (registration) {
            console.log('Registration successful, scope is:', registration.scope);
        }).catch(function (err) {
            console.log('Service worker registration failed, error:', err);
        });
}

ReactDOM.render(
    <Provider store={Store}>
        <AlertInfo />
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
