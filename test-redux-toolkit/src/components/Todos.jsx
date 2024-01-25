import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="container">TODOs</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button
            className="btn btn-outline-danger mx-2"
            onClick={() => {
              dispatch(removeTodo(todo.id));
            }}
          >
            x
          </button>
        </li>
      ))}
    </div>
  );
}

export default Todos;
