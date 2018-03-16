import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import LeftNav from '../../../components/left-nav/main'
import ChatContent from '../chat/main'
import FriendComponet from '../friend/main';

import './main.styl'

class MainHome extends Component {
    constructor (props) {
        super(props);
        console.log('main constructor');
        this.titles = [
            {icon: 'ca-chat01', key: 'chat-content', path: '/auth/main/chat/', titleText: '会话'},
            {icon: 'ca-person', key: 'friend-content', path: '/auth/main/friends/', titleText: '好友'},
            {icon: 'ca-more', key: 'more-content', path: '/auth/main/more/', titleText: '更多'}
        ]
    }
    render () {
        return (
            <div className={'main-wrapper'}>
                <LeftNav titles={this.titles} parentProps={this.props}/>
                <div className={'main-right-content'}>
                    <Switch>
                        <Route path={`${this.props.match.path}/chat`} component={ChatContent}/>
                        <Route path={`${this.props.match.path}/friends`} component={FriendComponet}/>
                        <Redirect to={`${this.props.match.path}/chat`}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default MainHome