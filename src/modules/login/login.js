import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
const {ipcRenderer} = window.require('electron')
import {Form, Input, Button} from 'antd'
const {FormItem} = Form

import 'antd/dist/antd.css'

class Login extends Component {
    constructor (props) {
        super(props)
        console.log('login constructor')
    }
    componentDidMount () {
        //ipcRenderer.send('openMain')
    }
    render () {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={'login_content'}>
                <div className={'login_logo'}></div>
                <div className={'login_form'}>
                    <h1>Welcome</h1>
                    <Form>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: 'Please input username'}]
                            })}
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Login