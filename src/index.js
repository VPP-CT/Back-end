/**
 * Created by Zephyr on 2/6/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import FlightsViewPage from './pages/list';
import HomePage from './pages/Home';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={HomePage}/>
        <Route path="/list" component={FlightsViewPage}/>
    </Router>
), document.getElementById("application"));