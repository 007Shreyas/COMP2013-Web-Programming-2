//We used useState hook to create a state variable count and setCount is used to update the value of count.
//We used two buttons to increment and decrement the value of count. We have also used a reset button to reset the value of count to 0.
import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <br />
      <button onClick={() => setCount(0)}>reset</button>
    </>
  );
}