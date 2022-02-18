import React, {useEffect, useState} from 'react';
import { Todolist } from './todo';

const TodoList = () => {
	const [state, setState] = useState({
		nextId: 0,
		todos: []
	})

	useEffect(() => {
		const json = localStorage.getItem("todos");
		const laodTodo = JSON.parse(json);
		if(laodTodo) {
			setState(laodTodo);
		}
	}, [])
	useEffect(() => {
		const json = JSON.stringify(state);
		localStorage.setItem("todos", json)
	}, [state]);

	const createTodo = newTodo => {
		let todo = {
			id: [state.nextId],
			todoText: newTodo,
			completed: false
		};
		let todos = [...state.todos, todo];
		let nextId = state.nextId + 1;
		setState({todos, nextId});
	}

	const deleteTodo = id => {
		let todos = state.todos.filter(todo => (
		  todo.id !== id
		));
		setState({todos});
	}

	const  toggleTodoCompletion = id => {
		let todos = state.todos.map(todo => (
		  (todo.id === id)
		  ? {...todo, completed: !todo.completed}
		  : todo
		));
		setState({todos});
	}
 
	const  editTodo = (id, newText) => {
		let todos = state.todos.map(todo => (
		  (todo.id === id)
		  ? {...todo, todoText: newText}
		  : todo
		));
		setState({todos});
	}

	function Form({createTodo}) {
		function handleSubmit(e) {
			e.preventDefault();
			createTodo(e.target.inputText.value);
			e.target.inputText.value = '';
		}
		
		return (
			<form 
			onSubmit={handleSubmit}
			>
			<input 
				type="text"
				className="inputText"
				name="inputText"
				placeholder="Add todo..."
			/>
			</form>
		);
	}

		return (
		  <div className="todolist">
			<Form createTodo={createTodo} />
			<Todolist 
			  todos={state.todos}
			  deleteTodo={deleteTodo}
			  toggleTodoCompletion={toggleTodoCompletion}
			  editTodo={editTodo}
			/>
		  </div>
		);
}

export default TodoList;

  