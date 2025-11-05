import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
    </div>
  );
}