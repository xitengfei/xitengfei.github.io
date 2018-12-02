import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configStore from '@/store/configStore'
import Route from '@/router/'
import * as serviceWorker from './serviceWorker';

import './reset.css';
import './xui.css';
import dataMenus from '@/data/menu'

const store = configStore({
    menuStore:dataMenus
});

ReactDOM.render(
    <Provider store={store} >
        <Route />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
