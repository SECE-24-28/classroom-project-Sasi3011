import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>Counter : {count}</h1>
      <div className="buttons">
      <button id="increment" onClick={increment}>Increment</button>
      <button id="increment" onClick={decrement}>Decrement</button>
      <button id="increment" style={{backgroundColor:"red",color:"white"}} onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
