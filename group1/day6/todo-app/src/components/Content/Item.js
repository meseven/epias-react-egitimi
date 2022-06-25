import React from "react";
import { useTodo } from "../../context/TodoContext";

function Item({ todo }) {
  const { toggle, removeItem } = useTodo();

  const handleChange = () => {
    toggle(todo.id);
  };

  return (
    <li className={todo.isCompleted ? "completed" : ""}>
      <div className="view">
        {/* {todo.checked.toString()} */}
        <input
          className="toggle"
          type="checkbox"
          value={todo.isCompleted}
          checked={todo.isCompleted}
          onChange={handleChange}
        />
        <label>{todo.text}</label>
        <button
          className="destroy"
          onClick={() => removeItem(todo.id)}
        ></button>
      </div>
    </li>
  );
}

export default Item;
