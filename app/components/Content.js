import React, { Component } from 'react';
import List from './List.js';
import GetTime from './GetTime.js';
import BootstrapElements from './BootstrapElements.js';
import Gallery from './Gallery.js';


class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            screen:"",
        }
    }

    componentWillMount(){
        if(this.props.state.screen == undefined){
            this.setState(state => ({
                screen: "todolist",
            }));
        }
    }

    componentWillReceiveProps(props){
        if(props.state.screen != undefined){
            this.setState(state => ({
                screen: props.state.screen,
            }));
        }
    }

    render() {

        
        console.log("screen: "+this.state.screen);

        return (
            <div className="content ">
                { this.state.screen=="todolist" &&(
                    <List />
                )}

                { this.state.screen=="time" &&(
                    <GetTime />
                )}

                { this.state.screen=="bootstrap" &&(
                    <BootstrapElements />
                )}

                { this.state.screen=="gallery" &&(
                    <Gallery />
                )}
            </div>
        );
    }
}

export default Content;