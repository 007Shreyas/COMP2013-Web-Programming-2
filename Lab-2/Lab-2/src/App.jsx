
import './App.css';
import Card from './components/Card';

function App() {
 
  return (
    <>

       <h1 className="custom-font-color">Resorts Lite</h1>
       <hr></hr>

          <div className="main-container">

           <Card image="src/assets/images/1.jpg"
            countryName="Indonesia"
            resortName="Gili Air Hotel"
            ratings="4.8"
            price="589"/>

           <Card image="src/assets/images/2.jpg" 
            countryName="Seychelles"
            resortName="Hilton Resort"
            ratings="4.2"
            price="629"/>

           <Card image="src/assets/images/3.jpg"
             countryName="US Virgin Islands"
            resortName="Goa Resort"
            ratings="3.5"
             price="485"/>

           <Card image="src/assets/images/4.jpg"
            countryName="Bahamas"
            resortName="Kuredu Resort"
            ratings="4.1"
            price="729"/>

           <Card image="src/assets/images/5.jpg" 
           countryName="Mauritius"
            resortName="Trou D'Eau Douce" 
            ratings="4.9"
           price="877" />

           <Card image="src/assets/images/6.jpg" 
           countryName="Bermuda"
           resortName="Staniel Cay Hotel"
           ratings="3.2"
           price="365"/>
      

          </div>



    </>
  )
}

export default App
