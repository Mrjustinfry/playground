import React from 'react';
import ReactDOM from 'react-dom';
//import {Provider} from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
//import store from './util/store';
import './style/index.css';
import App from './components/App';

ReactDOM.render(
        <App />,
    document.getElementById('root')
);
registerServiceWorker();
