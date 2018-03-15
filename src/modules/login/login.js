import React, {Component} from 'react'
//import {BrowserRouter as Router, Route} from 'react-router-dom'
const {ipcRenderer} = window.require('electron')
import {Form, Input, Button, Icon} from 'antd'
const FormItem = Form.Item

import 'antd/dist/antd.css'
import './login.styl'

class Login extends Component {
    constructor (props) {
        super(props)
        console.log('login constructor')
    }
    componentDidMount () {
        //ipcRenderer.send('openMain')
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Receive form value', values)
            }
        })
    }
    render () {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={'login-content'}>
                <div className={'login-logo'}></div>
                <div className={'login-form-content'}>
                    <h1>Welcome</h1>
                    <Form className={'login-form'} onSubmit={this.handleSubmit}>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: 'Please input username'}]
                            })(
                                <Input prefix={<Icon type='user' style={{fontSize: 13}}/>} placeholder={'please enter username'}/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please enter your password'}]
                            })(
                                <Input prefix={<Icon type='lock' style={{fontSize: 13}}/>} placeholder={'please enter password'}/>   
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" className={'login-form-button'} htmlType={'submit'} disabled={true}>登录</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }
}

const WrapperLogin = Form.create()(Login)

export default WrapperLogin