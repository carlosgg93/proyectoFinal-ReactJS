import React, { Component } from 'react';

class TaskAction extends Component{
	constructor(props){
		super(props)
		this.handleStatus = this.handleStatus.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleUrgente = this.handleUrgente.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.getButton = this.getButton.bind(this);
	}

	handleStatus(){
		this.props.setStatus(this.props.index);
	}

	handleEdit(){
		this.props.edit(this.props.index);
	}

	handleRemove(){
		this.props.remove(this.props.index);
	}

	handleUrgente(){
		this.props.urgente(this.props.index);
	}

	getButton(){
		if( !this.props.completed ){
			return (
				<button type="button" onClick={this.handleStatus} className="btn btn-xs btn-success">
					<i className="glyphicon glyphicon-ok"></i>
				</button>
			)
		} else {
			return (
				<button type="button" onClick={this.handleStatus} className="btn btn-xs btn-info">
					<i className="glyphicon glyphicon-repeat"></i>
				</button>
			)
		}
	}
 
	render () {
		return (
			<div className="btn-group btn-group-xs pull-right" role="group">{this.getButton()}
				<button type="button" onClick={this.handleUrgente} className="btn btn-xs btn-warning" >
					<i className="glyphicon glyphicon-warning-sign"></i>
				</button>
				<button type="button" onClick={this.handleEdit} className="btn btn-xs btn-primary" >
					<i className="glyphicon glyphicon-pencil"></i>
				</button>
				<button type="button" onClick={this.handleRemove} className="btn btn-xs btn-danger" >
					<i className="glyphicon glyphicon-remove"></i>
				</button>
			</div>
		)
	}
}

export default TaskAction;
