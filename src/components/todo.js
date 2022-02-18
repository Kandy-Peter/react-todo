import React from 'react';
import img from '../images/delete.png';
import Check from '../images/check.png';
import Uncheck from '../images/unchecked.png';

function Todo(
  id, todoText, completed, deleteTodo, toggleTodoCompletion, editTodo,
) {
  function handleDelete() {
    deleteTodo(id);
  }

  function handleToggle() {
    toggleTodoCompletion(id);
  }

  function handleEdit(e) {
    editTodo(id, e.target.value);
  }

  return (
    <li className="todo-item">
      <button type="button" onClick={handleToggle}>
        {completed
          ? <img src={Check} alt="not-checked" />
          : <img src={Uncheck} alt="checked" />}
      </button>
      <form
        onSubmit={
          (e) => {
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
      <button type="button" onClick={handleDelete}>
        <img src={img} alt="delete" />
      </button>
    </li>
  );
}

// Todo.propTypes = {
//   id: PropTypes.number.isRequired,
//   todoText: PropTypes.string.isRequired,
//   completed: PropTypes.bool.isRequired,
//   deleteTodo: PropTypes.func.isRequired,
//   toggleTodoCompletion: PropTypes.func.isRequired,
//   editTodo: PropTypes.func.isRequired,
// };

function Todolist(
  todos, deleteTodo, toggleTodoCompletion, editTodo,
) {
  const { items } = todos;
  return (
    <ul>
      {items.map((todo) => (
        <Todo
          key={todo.id}
          deleteTodo={deleteTodo}
          toggleTodoCompletion={toggleTodoCompletion}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}
// Todo.propTypes = {
//   todos: PropTypes.any.isRequired,
//   deleteTodo: PropTypes.func.isRequired,
//   toggleTodoCompletion: PropTypes.func.isRequired,
//   editTodo: PropTypes.func.isRequired,
// };

export default Todolist;
