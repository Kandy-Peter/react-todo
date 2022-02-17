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
		<li 
		style={{
			width: '350px',
			margin: '0 0 10px 0',
			display: 'flex',
			justifyContent: 'space-between'
		}}
		>
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
			style={{
				width: '220px', 
				border: '0', 
				outline: '0',
				fontSize: '16px'
			}}
			onChange={handleEdit}
			/>
		</form>
		<p onClick={handleToggle}>{completed ? 'completed' : 'incomplete'}</p>
		<button onClick={handleDelete}>X</button>
		</li>
	);
}
	
function Todolist({todos, deleteTodo, toggleTodoCompletion, editTodo}) {
	return (
		<ul
		style={{
			padding: '0'
		}}  
		>
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