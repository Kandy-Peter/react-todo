import React, { useEffect, useState } from 'react';

const TodoApp = () => {
	const [state, setState] = useState({
		text: '',
	})
	const [data, setData] = useState([]);

	useEffect(() => {
		const json = localStorage.getItem("todos");
		const loadTodos = JSON.parse(json);
		if(loadTodos) {
			setData(loadTodos);
		}
	}, []);

	useEffect(() => {
		const json = JSON.stringify(data);
		localStorage.setItem("todos", json);
	}, [data])

	const toggleNote = (id) => {
		const newData = [...data].map((item) => {
			if(item.id === id) {
				item.complete = !item.complete;
			}
			return item;
		})
		setData(newData);
	}

	const updateNote = (i, props) => {
		const newData = data.slice();
		newData[i] = Object.assign({}, newData[i], props);
		setData({ newData });
	}

	const deleteNote = (i) => {
		const newData = data.slice();
		newData.splice(i, 1);
		setData({ newData });
	}

	const addNewNote = () => {
		const note = {
			id: data.length,
			text: state.text,
			editing: false,
			complete: false
		}
		
		const newData = data.slice();
		newData.push(note);
		setState({ text: ''})
		setData(newData);
	}
	const { text } = state;

	return (
		<div className="todoApp">
				<h2>Todo</h2>
				<input 
				type="text" 
				placeholder="What needs to be done?"
				value={text}
				onChange={ event => setState({ text: event.target.value })}
				onKeyPress={ event => event.key === 'Enter' && addNewNote() }
				/>
				<ul className="todoApp__list">
				{ 
						data.map( (note) => (
						<li key={note.id} className="animated fadeInDown">
								<label>
								<input type="checkbox" 
										checked={note.complete}
										onChange={()=>toggleNote(data.id)}
								/>
								<i className="fa fa-square-o">X</i><i className="fa fa-check-square-o">0</i> 
								</label>
								{
								note.editing && !note.complete ?
								<input type="text" value={note.text} name = {note.text}
										onChange={e => updateNote(data.id, { text: e.target.value })}
										onBlur={e => updateNote(data.id, { editing: false })}
										autoFocus
								/>:
								<span className={note.complete ? 'complete' : ''} 
										onClick={e => updateNote(data.id, { editing: true })}>
										{note.text}
								</span>
								}
								<span className="delete" onClick={()=>deleteNote(data.id)}>X</span>
						</li>
						))
				}
				</ul>
				{
				data.length &&
				<div className="todoApp__toolbar">
						<div className="todoApp__toolbar-clear" onClick={ ()=>setState({ data: [] })}>Clear All</div>
				</div>
				}
				
		</div>
	)
}

export default TodoApp;
