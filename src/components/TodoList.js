import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import img from '../images/delete.png';
import Check from '../images/check.png';
import Uncheck from '../images/unchecked.png';

const TodoList = () => {
  const [state, setState] = useState({
    todos: [],
  });

  useEffect(() => {
    const json = localStorage.getItem('todos');
    const laodTodo = JSON.parse(json);
    if (laodTodo) {
      setState(laodTodo);
    }
  }, []);
  useEffect(() => {
    const json = JSON.stringify(state);
    localStorage.setItem('todos', json);
  }, [state]);

  const createTodo = (newTodo) => {
    const todo = {
      id: [state.todos.length],
      todoText: newTodo,
      completed: false,
    };
    const todos = [...state.todos, todo];
    setState({ todos });
  };

  const deleteTodo = (id) => {
    const todos = state.todos.filter((todo) => (
      todo.id !== id
    ));
    setState({ todos });
  };

  const toggleTodo = (id) => {
    const todos = state.todos.map((todo) => (
      (todo.id === id) ? { ...todo, completed: !todo.completed } : todo
    ));
    setState({ todos });
  };

  const editTodo = (id, newText) => {
    const todos = state.todos.map((todo) => (
      (todo.id === id) ? { ...todo, todoText: newText } : todo
    ));
    setState({ todos });
  };

  function Form({ createTodo }) {
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

  Form.propTypes = {
    createTodo: PropTypes.func.isRequired,
  };

  return (
    <div className="todolist">
      <div className="container">
        <Form createTodo={createTodo} />
        {state.todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <button onClick={() => toggleTodo(todo.id)} type="button">
              {todo.completed
                ? <img src={Check} alt="not-checked" />
                : <img src={Uncheck} alt="checked" />}
            </button>
            <form onSubmit={(e) => {
              e.preventDefault();
              e.target.todoText.blur();
            }}
            >
              <input
                type="text"
                className="todoText"
                name="todoText"
                value={todo.todoText}
                onChange={(e) => editTodo(todo.id, e.target.value)}
              />
            </form>
            <button type="button" onClick={() => deleteTodo(todo.id)}>
              <img src={img} alt="delete" />
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
