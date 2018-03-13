import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class Login extends Component {
    constructor (props) {
        super(props)
        console.log('login constructor')
    }
    render () {
        return (
            <div>login page</div>
        )
    }
}

export default Login