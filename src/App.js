import React, { useState, useCallback, useEffect } from "react";
import useInterval from "./useInterval";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState(true);

  const callback = () => {
    setCount(count + 1);
  };

  useInterval(callback, isRunning ? delay : null);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      Running:
      <input
        type="checkbox"
        checked={isRunning}
        onChange={e => setIsRunning(e.target.checked)}
      />
      <br />
      <br />
      Delay :{"  "}
      <input
        type="number"
        value={delay}
        onChange={e => setDelay(e.target.value)}
      />
    </div>
  );
}
