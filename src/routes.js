import React from 'react'
import { Route, IndexRoute } from 'react-router'
import {
    App,
    Counter,
    Home
} from './containers'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
        <Route path="counter" component={Counter} />
    </Route>
)
