import React, {Component} from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types';

import './main.styl'

// titles = [{icon: '', key: '', path: '', text: '', titleText: ''}]
class LeftNav extends Component {
    constructor (props) {
        super(props);
        this.titles = this.props.titles || [];
    }
    handleNavClick (path) {
        console.log(this.context);
        this.context.router.history.push(path);
    }
    render () {
        return (
            <div className={'left-nav-wrapper'}>
                {
                    this.titles.length ?
                        this.titles.map((val) => {
                            return (
                                <div key={'let-nav' + val.key} className={'left-nav-item'} title={val.titleText || ''} onClick={this.handleNavClick.bind(this, val.path)}>
                                    <i className={`icon iconfont ${val.icon}`}></i>
                                    {val.text || ''}
                                </div>
                            )
                        }) :
                        ''
                }
            </div>
        )
    }
}

LeftNav.contextTypes = {
    router: PropTypes.object
};

export default LeftNav