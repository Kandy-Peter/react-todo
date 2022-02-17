import React, {useState} from 'react';
import { Todolist, Form } from './todo'

const TodoList = () => {
	const [state, setState] = useState({
		nextId: 3,
		todos: [
			{
			  id: 0,
			  todoText: 'Make a todo app',
			  completed: false
			}, {
			  id: 1,
			  todoText: 'Put in a Rhea easter egg',
			  completed: false
			}, {
			  id: 2,
			  todoText: 'Profit',
			  completed: false
			},
		  ]

	})

	const createTodo = newTodo => {
		console.log(newTodo);
		let todo = {id: [state.nextId], todoText: newTodo, completed: false};
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

  