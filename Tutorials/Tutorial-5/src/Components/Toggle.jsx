//This component is a toggle component. It displays a happy face when the button is clicked and a sad face when the button is clicked again.
//The state stored is a boolean value isHappy which is set to true initially.
//The button text is also changed based on the state of isHappy.
//We can use more than one state variable in a component.
import { useState } from "react";

export default function Toggle() {
  const [isHappy, setIsHappy] = useState(true);
  const [btnText, setBtnText] = useState("Sad Face");
  return (
    <>
      <h1>{isHappy ? "😊" : "🙁"}</h1>
      <button
        onClick={() => {
          setIsHappy(!isHappy);
          isHappy ? setBtnText("Happy Face") : setBtnText("Sad Face");
        }}
      >
        {btnText}
      </button>
    </>
  );
}