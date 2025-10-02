//if you have a helper function that takes a prop as an parameter
const msgOnClick = (msg) => console.log(msg);

export default function ClickerWithProps({ message, btnText }) {
  return (
    <div>
      {/* The onClick function will have to be a lambda to aviod firing the function at app load */}
      <button onClick={() => msgOnClick(message)}>{btnText}</button>
    </div>
  );
}