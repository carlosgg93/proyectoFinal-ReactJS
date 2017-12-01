import React, { Component } from 'react';

class ToDoFilters extends Component{

	constructor(props){
		super(props);
		this.state={
			selectedOption:"all"
		}

		this.handleOnChange= this.handleOnChange.bind(this)
	}

	handleOnChange(event){
		console.log(event.target.value);
		this.props.taskFilter(event.target.value);
		this.setState({selectedOption:event.target.value});
	}

	render () {
		return (

			<div className="btn-group" data-toggle="buttons">
				<label className="btn btn-secondary">
					<input type="radio" name="options" id="all" value="all" checked={this.state.selectedOption === 'all'} onChange={this.handleOnChange} /> All
				</label>
				<label className="btn btn-secondary ">
		    		<input type="radio" name="options" id="completed" value="completed" checked={this.state.selectedOption === 'completed'} onChange={this.handleOnChange} /> Completed
		    	</label>
		    	<label className="btn btn-secondary ">
		    		<input type="radio" name="options" id="actives" value="actives" checked={this.state.selectedOption === 'actives'} onChange={this.handleOnChange} /> Actives
				</label>
				<label className="btn btn-secondary ">
		    		<input type="radio" name="options" id="urgentes" value="urgentes" checked={this.state.selectedOption === 'urgentes'} onChange={this.handleOnChange} /> Urgentes
				</label>
			</div>
		)
	}

}
export default ToDoFilters;