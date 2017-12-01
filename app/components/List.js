import React, { Component } from 'react';
import ToDoList from './ToDoList.js';

class List extends Component {
    constructor(props) {
        super(props);

        this.state={
            tasks: [
                { text: "Tarea 1", completed: false, urgente: false },
                { text: "Tarea 2", completed: false, urgente: false },
                { text: "Tarea 3", completed: false, urgente: true },
                { text: "Tarea 4", completed: true, urgente: false }
            ],
            filterTasks:''
        }

        this.addTask = this.addTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.taskAction = this.taskAction.bind(this);
        this.taskFilter = this.taskFilter.bind(this);
        this.urgenteTask = this.urgenteTask.bind(this);
    }

    addTask(task) {
        if( task.text ){
            this.state.tasks.push(task);
            this.setState( this.state );
        }
    }

    saveTask(index, task) {
        if( task.text ){
            this.state.tasks[index] = task;
            this.state.edit = null;
            this.setState( this.state );
        }
    }

    removeTask(index) {
        if( index >= 0 && this.state.tasks.length > 0 ){
            this.state.tasks.splice(index, 1);
            this.setState( this.state );
        }
    }

    editTask(index) {
        if( index >= 0 && this.state.tasks.length > 0 ){
            var task = this.state.tasks[index];
            task.index = index
            this.setState({edit:task});
        }
    }

    taskAction(index){
        this.state.tasks[index].completed = !this.state.tasks[index].completed;
        this.setState( this.state );
    }

    urgenteTask(index){
        this.state.tasks[index].urgente = !this.state.tasks[index].urgente;
        this.setState( this.state );
    }
    
    taskFilter(id){
        if(id=='completed'){
            let taskCompleted=[];
            this.state.tasks.map((option) => {
                if(option.completed){
                    taskCompleted.push({
                         text: option.text, 
                         completed: option.completed,
                         urgente: option.urgente
                    })
                }
            });
            this.setState( {filterTasks: taskCompleted} );
        }

        if(id=='actives'){
            let taskActives=[];
            this.state.tasks.map((option) => {
                if(!option.completed){
                    taskActives.push({
                         text: option.text, 
                         completed: option.completed,
                         urgente: option.urgente
                    })
                }
            });
            this.setState( {filterTasks: taskActives} );
        }

        if(id=='urgentes'){
            let taskUrgentes=[];
            this.state.tasks.map((option) => {
                if(option.urgente && !option.completed){
                    taskUrgentes.push({
                         text: option.text, 
                         completed: option.completed,
                         urgente: option.urgente
                    })
                }
            });
            this.setState( {filterTasks: taskUrgentes} );
        }

        if(id=='all'){
            this.setState( {filterTasks: this.state.tasks} );
        }
    }

    render() {

        let tasks;

		if(this.state.filterTasks ==''){tasks=this.state.tasks }
		else{tasks=this.state.filterTasks}

		return (
			<ToDoList
				tasks={tasks}
				remove={this.removeTask}
				edit={this.editTask}
				urgente={this.urgenteTask}
				taskAction={this.taskAction}
				taskFilter={this.taskFilter} 
			/>
		);
    }
}

export default List;