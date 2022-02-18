import React, { useEffect, useState } from 'react';
import Todolist from './todo';

const TodoList = () => {
  const [state, setState] = useState({
    nextId: 0,
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
      id: [state.nextId],
      todoText: newTodo,
      completed: false,
    };
    const todos = [...state.todos, todo];
    const nextId = state.nextId + 1;
    setState({ todos, nextId });
  };

  const deleteTodo = (id) => {
    const todos = state.todos.filter((todo) => (
      todo.id !== id
    ));
    setState({ todos });
  };

  const toggleTodoCompletion = (id) => {
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

  function Form(createTodo) {
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

  // Form.propTypes = {
  //   createTodo: PropTypes.string.isRequired,
  // };

  return (
    <div className="todolist">
      <div className="container">
        <Form createTodo={createTodo} />
        <Todolist
          todos={state.todos}
          deleteTodo={deleteTodo}
          toggleTodoCompletion={toggleTodoCompletion}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
};

export default TodoList;
