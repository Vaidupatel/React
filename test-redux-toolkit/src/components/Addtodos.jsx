import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
function Addtodos() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <div className="mb-3">
          <label htmlFor="addTodo" className="form-label">
            Add TODO
          </label>
          <input
            type="text"
            className="form-control"
            id="addTodo"
            placeholder="Enter The Todo.."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Addtodos;
