import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { render } from 'react-dom';
import 'babel-polyfill';
// import './styles/css/bootstrap.css';
import React from 'react';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = configureStore();

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={browserHistory} routes={routes} />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
);