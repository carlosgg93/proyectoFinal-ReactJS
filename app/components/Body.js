import React, { Component } from 'react';
import LeftBar from './LeftBar.js';
import Content from './Content.js';

class Body extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("BodyState: "+this.props.state);
        return (
            <div className="body">
                <div className="body-inner">
                    <LeftBar state={this.props.state} actions={this.props.actions}/>
                    <Content state={this.props.state} actions={this.props.actions}/>
                </div>
            </div>
        );
    }
}

export default Body;