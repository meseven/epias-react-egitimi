import React, { useState, useMemo, useCallback } from "react";
import User from "./User";
import Header from "./Header";

function Counter() {
  const [amount, setAmount] = useState(1);
  const [name, setName] = useState("Ahmet");
  const [count, setCount] = useState(0);

  console.log("Counter re-render");

  const data = useMemo(() => {
    return {
      id: 1,
      name,
    };
  }, [name]);

  const increment = useCallback(
    (val) => {
      setCount((prev) => prev + amount + val);
    },
    [amount]
  );

  return (
    <div>
      <Header increment={increment} />

      <h2>Count: {count}</h2>
      <button onClick={() => increment(1)}>Arttır</button>

      <h2>Amount: {amount}</h2>
      <button onClick={() => setAmount(1)}>1</button>
      <button onClick={() => setAmount(5)}>5</button>
      <button onClick={() => setAmount(10)}>10</button>

      <hr />
      <button onClick={() => setName("Mehmet")}>İsmi Değiştir</button>
      <User data={data} />
    </div>
  );
}

export default Counter;
