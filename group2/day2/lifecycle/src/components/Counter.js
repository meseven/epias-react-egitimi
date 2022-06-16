import React from "react";
import { useState, useEffect, useRef } from "react";

function Counter() {
  const buttonRef = useRef(null);
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    console.log("Component mount edildi");

    let interval = setInterval(() => {
      console.log("Interval çalıştı");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Component unmount edildi.");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + amount)}>Click</button>

      <hr />

      <h2>Amount: {amount}</h2>
      <button onClick={() => setAmount(1)}>1</button>
      <button onClick={() => setAmount(5)}>5</button>
      <button onClick={() => setAmount(10)}>10</button>

      <br />
      <br />

      <button ref={buttonRef}>Sample Button</button>
    </div>
  );
}

export default Counter;
