import React from "react";
import useStore from "../../store/useStore";
import List from "./List";

function Content() {
  const todos = useStore((state) => state.todos);
  const toggleAll = useStore((state) => state.toggleAll);

  const handleClick = () => {
    toggleAll();
  };

  const status = todos.every((item) => item.isCompleted);

  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        value={status}
        checked={status}
        onChange={() => {}}
      />
      <label htmlFor="toggle-all" onClick={handleClick}>
        Mark all as complete
      </label>

      <List />
    </section>
  );
}

export default Content;
