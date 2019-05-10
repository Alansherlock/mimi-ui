import React, { Component } from 'react';
import '../../static/style';
export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        return <div id="app">
            {children}
        </div>
    }
}