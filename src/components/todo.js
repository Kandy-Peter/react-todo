import React from 'react';
import img from '../images/delete.png';
import Check from '../images/check.png';
import Uncheck from '../images/unchecked.png';


function Todo({id, todoText, completed, deleteTodo, toggleTodoCompletion, editTodo}) {

	function handleDelete(e) {
		deleteTodo(id);
	}

	function handleToggle(e) {
		toggleTodoCompletion(id);
	}

	function handleEdit(e) {
		editTodo(id, e.target.value)
	}

	return (
		<li className='todo-item'>
		<div onClick={handleToggle}>
		{completed ?
			<img src = {Check} alt="not-checked" />:
			<img src={Uncheck} alt="checked" />
		 }
		</div>
		<form 
			onSubmit={
			e => {
				e.preventDefault();
				e.target.todoText.blur();
			}
			}
		>
			<input 
			type="text"
			className="todoText"
			name="todoText"
			value={todoText}
			onChange={handleEdit}
			/>
		</form>
		<img onClick={handleDelete} src={img} alt="delete" />
		</li>
	);
}

function Todolist({todos, deleteTodo, toggleTodoCompletion, editTodo}) {
	return (
		<ul>
		{todos.map(todo => (
			<Todo 
			key={todo.id}
			{...todo}
			deleteTodo={deleteTodo}
			toggleTodoCompletion={toggleTodoCompletion}
			editTodo={editTodo}
			/>
			))}
		</ul>
	);
}

export { Todolist };