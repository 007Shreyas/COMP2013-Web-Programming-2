//This counter has a limit of -10 to 10. The counter should not go below -10 or above 10.
import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => count > -10 && setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => count < 10 && setCount(count + 1)}>
        Increment
      </button>

      <br />
      <button onClick={() => setCount(0)}>reset</button>
    </>
  );
}