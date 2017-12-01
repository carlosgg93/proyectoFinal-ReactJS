import React, { Component } from 'react';
import TaskAction from './ToDoAction';
import ToDoFilters from './ToDoFilters';

class ToDoList extends Component{
	render() {
		return (
			<div className="App">
        		<div className="row">
          			<div className="container">
            			<div className="col-md-12">
							<h4>TODO List</h4><hr/>
							<ToDoFilters taskFilter={this.props.taskFilter} />
							<ul className="list-group">
							{this.props.tasks.map(function(task, index){
								var cssClass = 'list-group-item list-group-item-';
								if( task.completed ){
									cssClass += 'info';
								} else {
									if(!task.completed && !task.urgente){
										cssClass += 'success';
									}else{
										cssClass += 'warning';
									}
								}
								return (
									<li key={index} className = {cssClass}>
										<TaskAction 
											index={index} 
											completed={task.completed} 
											setStatus={this.props.taskAction} 
											edit={this.props.edit} 
											remove={this.props.remove}
											urgente={this.props.urgente}/>
										{task.text}
									</li>
								)
							}, this)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ToDoList;