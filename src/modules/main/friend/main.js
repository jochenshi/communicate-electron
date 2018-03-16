import React, {Component} from 'react'
import {Input, Button} from 'antd'

import './main.styl'

class FriendComponet extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="main-friend-wrapper">
                <div className="friend-left-list">
                    <Button>添加</Button>
                </div>
                <div className="friend-right-content">right</div>
            </div>
        )
    }
}

export default FriendComponet