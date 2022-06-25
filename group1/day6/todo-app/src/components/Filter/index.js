import React from "react";
import useStore from "../../store/useStore";

function Filter() {
  const todos = useStore((state) => state.todos);
  const activeFilter = useStore((state) => state.activeFilter);
  const setActiveFilter = useStore((state) => state.setActiveFilter);
  const clearCompleted = useStore((state) => state.clearCompleted);

  const items_left = todos.filter((item) => !item.isCompleted).length;
  const isVisibleClearCompleted = todos.some((todo) => todo.isCompleted);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{items_left}</strong> item{items_left !== 1 && "s"} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={() => setActiveFilter("all")}
            className={activeFilter === "all" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setActiveFilter("active")}
            className={activeFilter === "active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setActiveFilter("completed")}
            className={activeFilter === "completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>

      {isVisibleClearCompleted && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default Filter;
