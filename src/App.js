import React from 'react';
//import { createStore } from 'redux';
import './App.css';

class Todo extends React.Component {
	render() {
		return (
			<div id={this.props.id}>
				<span><p>{this.props._todo}</p><button onClick={this.props.tRemove}>Remove</button></span>
			</div>
		);
	}
}
class App extends React.Component {
	constructor(props) {
		super(props);
		this.updateTodos = this.updateTodos.bind(this);
		this.removeTodos = this.removeTodos.bind(this);
		//this.store = createStore(this.updateTodos);
		this.state = {
			todosList: []
		};
	}
	updateTodos() {
			var self = this;
			function createTodo(tmsg) {
				return (
						<Todo id={tmsg.value} key={tmsg.value} tRemove={self.removeTodos(tmsg.value)} _todo={tmsg.value} />
				);
			}
			let tmsg = document.getElementById("tMsg");
			if (!tmsg || !tmsg.value) { return; }
			this.setState({todosList: this.state.todosList.concat(createTodo(tmsg))});
			//this.forceUpdate();
			console.log("yippee");
			console.log("shut up vikram", this.state.todosList);
	}
	removeTodos(todoId) {
		return function() {
				let todo = document.getElementById(todoId);
				if (!todo || !todo.innerText) { return; } // ghost todo?
				todo.remove();
		}
	}
	render() {
		return (
			<div>
				<input id="tMsg" placeholder="Write a todo!"></input>
				<button onClick={this.updateTodos}>Create New Todo</button>
				{this.state.todosList}
			</div>
		);
	}
}

export default App;
