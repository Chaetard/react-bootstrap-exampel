import React from "react";
import Cards from "./components/Cards";
import "./App.css";
import Navbar from "./components/Navbar";
import "./components/navbar.css";
import TextCon from "./components/TextCon";
import WeatherWidget from "./components/WeatherWidget";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TextCon />
      <Cards />
      <div className="container-fluid">
        <div className="row">
        <div className="col-md-12">
        <WeatherWidget/>
        </div>
        </div>
      
      </div>
      
    </div>
  );
}

export default App;
