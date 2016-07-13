import React, { PropTypes } from 'react'
import { Router, Route } from 'react-router'
import {
    Counter,
    Home
} from './containers'

const Routes = ({ history }) =>
    <Router history={history}>
        <Route path="/" component={Home} />
        <Route path="home" component={Home} />
        <Route path="counter" component={Counter} />
    </Router>

Routes.propTypes = {
    history: PropTypes.any
}

export default Routes