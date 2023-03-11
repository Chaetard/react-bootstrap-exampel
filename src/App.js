import React from "react";
import Cards from "./components/Cards";
import "./App.css";
import Navbar from "./components/Navbar";
import "./components/navbar.css";
import TextCon from "./components/TextCon";
import WeatherWidget from "./components/WeatherWidget";
import MyGallery from "./components/MyGallery";
import TwitchEmbedVideo from "react-twitch-embed-video";
import Jokes from "./components/Jokes";
import Voidma from "./components/Voidma";

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Voidma/>
      <TextCon/>
      <Cards />

      <div className="container justify-content-center align-items-center">
        <div className="col-lg-8 col-md-12 mx-auto">
          <WeatherWidget />
          <Jokes />
          
        </div>
      </div>

      
    </div>
  );
}

export default App;
/*
<TwitchEmbedVideo
channel='mcj_mcj'
width='1080'
height='640'
hideChat='true'
hideControls='true'/>
*/