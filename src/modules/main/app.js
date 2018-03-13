import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import MainHome from './test'

class App extends Component {
    render () {
        console.log(111)
        return (
            <Router basename={'/index.html'}>
                <Switch>
                    <Route path={'/auth/main'} component={MainHome}/>
                    <Redirect to={'/auth/main'} />
                </Switch>
            </Router>
        )
    }
}

export default App