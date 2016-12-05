import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import About from './About';
import Alphabets from './Alphabets'; //todo


export default ()=> {
    return (
        <Router history={browserHistory}>
            <Route path="/" components={Alphabets}/>
            <Route path="/about" components={About}/>
        </Router>
    )

}