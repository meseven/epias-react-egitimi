import React from "react";
import useCounter from "../store/useCounter";

function Counter() {
  const count = useCounter((state) => state.count);
  const increase = useCounter((state) => state.increase);
  const reset = useCounter((state) => state.reset);

  return (
    <div>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
