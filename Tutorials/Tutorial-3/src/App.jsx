import "./App.css";
import Clicker from "./Components/Clicker";
import ClickerWithProps from "./Components/ClickerWithProps";
import EmptyForm from "./Components/EmptyForm";
import ListingContainer from "./Components/ListingContainer";
import data from "./data/data";

function App() {
  return (
    <>
      <h1>Resorts Lite</h1>
      <ListingContainer items={data} />
      <Clicker />
      <EmptyForm />
      <ClickerWithProps
        message="This is a prop"
        btnText="Click me to display message"
      />
    </>
  );
}

export default App;