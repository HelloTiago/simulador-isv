import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/app'
import Simulador from './components/simulador'

render((
    <Router history={browserHistory}>
        <Route component={App} path="/">
            <IndexRoute component={Simulador} />
        </Route>
    </Router>
), document.getElementById('app'))
