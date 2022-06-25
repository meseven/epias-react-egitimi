import React from "react";
import useStore from "../../store/useStore";
import Item from "./Item";

let filtered;
function List() {
  const todos = useStore((state) => state.todos);
  const activeFilter = useStore((state) => state.activeFilter);

  filtered = [...todos];

  if (activeFilter !== "all") {
    filtered = todos.filter((item) =>
      activeFilter === "active" ? !item.isCompleted : item.isCompleted
    );
  }

  return (
    <ul className="todo-list">
      {filtered.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default List;
