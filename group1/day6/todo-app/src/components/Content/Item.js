import React from "react";
import useStore from "../../store/useStore";

function Item({ todo }) {
  const toggle = useStore((state) => state.toggle);
  const removeItem = useStore((state) => state.removeItem);

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
