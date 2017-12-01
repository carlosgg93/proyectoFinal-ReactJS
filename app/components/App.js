import React, { Component } from 'react';
import Flux from 'flux';
import Store from '../stores/Store';
import Actions from '../actions/Actions';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';

class App extends Component {
	constructor(){
		super();

		var dispatcher = new Flux.Dispatcher();
		this.store = new Store(dispatcher);
		this.actions = new Actions(dispatcher,this.store);

		this.state ={
			data:false
		}

		this.store.on("CHANGE", state =>{
			this.setState({data: this.store.state});
			console.log("entro change state");
		});
	}	

	render() {
		console.log("AppState: "+this.state.data);
		return (
			<div className="app">
              <div className="app-inner">
				<Header />
				<Body state={this.state.data} actions={this.actions}/>
                <Footer />
              </div>
            </div>
		);
	}
}

export default App;