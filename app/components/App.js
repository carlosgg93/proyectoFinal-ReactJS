import React, { Component } from 'react';
import Flux from 'flux';
// import Store from './stores/Store';
// import Actions from './actions/Actions';
import Header from './Header.js';

class App extends Component {
	constructor(){
		super();

		var dispatcher = new Flux.Dispatcher();
		// this.store = new Store(dispatcher);
		// this.actions = new Actions(dispatcher,this.store);

		// this.state ={
		// 	data:false
		// }

		// this.store.on("CHANGE", state =>{
		// 	this.setState({data: this.store.state});
		// });
	}	

	render() {
		return (
			<div className="app">
              <div className="app-inner">
				<Header actions={this.actions}/>
              </div>
            </div>
		);
	}
}

export default App;