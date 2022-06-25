import React from "react";
import { useTodo } from "../../context/TodoContext";
import Item from "./Item";

let filtered;
function List() {
  const { todos, activeFilter } = useTodo();

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
