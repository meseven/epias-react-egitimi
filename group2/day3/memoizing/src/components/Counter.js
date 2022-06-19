import React, { useState, useMemo, useCallback } from "react";
import Footer from "./Footer";
import Header from "./Header";
import User from "./User";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ahmet");
  const [amount, setAmount] = useState(1);

  console.log("Counter re-render");

  const data = useMemo(() => ({ id: 1, name }), [name]);

  const increaseCount = useCallback(() => {
    setCount((prev) => prev + amount);
  }, [amount]);

  return (
    <div>
      <Header count={count < 5 ? count : 5} />

      <h2>{count}</h2>
      <button onClick={increaseCount}>Arttır</button>

      <User data={data} />
      <button onClick={() => setName("Murat")}>İsmi Değiştir</button>

      <h2>Amount: {amount}</h2>
      <button onClick={() => setAmount(1)}>1</button>
      <button onClick={() => setAmount(5)}>5</button>
      <button onClick={() => setAmount(10)}>10</button>
      <Footer increaseCount={increaseCount} />
    </div>
  );
}

export default Counter;
