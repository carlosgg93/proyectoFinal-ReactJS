import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';

require('../assets/images/cloud.png');
require('../assets/images/edit.png');
require('../assets/images/icon.png');
require('../assets/images/gallery.png');

class LeftBar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev, type) {
        ev.preventDefault();
        this.props.actions.setScreen(type);
    }

    render() {
        const state = this.props.state;

        // const screen = state.get('screen');

        let todolistClass = 'todolist';
        let timeClass = 'time';
        let bootstrapClass='bootstrapClass';
        let galleryClass='gallery';

        if (screen) {
            switch (screen) {
                case "todolist":
                    todolistClass += ' active';
                    break;
                case "time":
                    timeClass += ' active';
                    break;
                case "bootstrapClass":
                    bootstrapClass += ' active';
                    break;
                case "gallery":
                    galleryClass += ' active';
                    break;
            }
        }

        return (
            <div className="leftbar">
                <div className="leftbar-inner">
                    <div onClick={ev => this.handleClick(ev, 'todolist')} className={todolistClass} data-toggle="tooltip" title="TODO List">
                        <img className="img-responsive img-leftbar" src="./assets/images/icon.png"/>
                    </div>
                    <div onClick={ev => this.handleClick(ev, 'time')} className={timeClass} data-toggle="tooltip" title="Time">
                        <img className="img-responsive img-leftbar" src="./assets/images/cloud.png" />
                    </div>
                    <div onClick={ev => this.handleClick(ev, 'bootstrap')} className={bootstrapClass} data-toggle="tooltip" title="Bootstrap">
                        <img className="img-responsive img-leftbar" src="./assets/images/edit.png" />
                    </div>
                    <div onClick={ev => this.handleClick(ev, 'gallery')} className={galleryClass} data-toggle="tooltip" title="Gallery">
                        <img className="img-responsive img-leftbar" src="./assets/images/gallery.png" />
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftBar;