import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    let interval = setInterval(() => setCount((prev) => prev + 1), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + amount)}>Arttır</button>

      <hr />

      <h1>Amount: {amount}</h1>
      <button onClick={() => setAmount(1)}>1</button>
      <button onClick={() => setAmount(5)}>5</button>
      <button onClick={() => setAmount(10)}>10</button>
    </div>
  );
}

export default Counter;
