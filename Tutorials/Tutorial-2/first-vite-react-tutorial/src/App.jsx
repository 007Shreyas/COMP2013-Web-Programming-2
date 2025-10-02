
import './App.css';
import Card from './components/Card';

function App() {
  


  return (
    <>
    <h1>Diamond World</h1>
    <div className="main-container">
     <Card image="src/assets/images/1.jpg" name="Princess" price="1300"/>
     <Card image="src/assets/images/2.jpg" name="Swan" price="900" sale={true}/>
     <Card image="src/assets/images/3.jpg" name="Fairy" price="1100"/>

    </div>
 

    </>

  );
}

export default App
