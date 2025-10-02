const clickMessage = () => console.log("Clickty click");

export default function Clicker() {
  // we avoid adding the empty brackets to the function to aviod firing up at app load and not at click
  return <button onClick={clickMessage}>Click Me</button>;
}