import React, { useEffect, useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const increase = () => {
    setCount((c) => c + 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      Counter
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default Counter;
