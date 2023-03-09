import React from "react";
import Cards from "./components/Cards";
import "./App.css";
import Navbar from "./components/Navbar";
import "./components/navbar.css";
import TextCon from "./components/TextCon";
import WeatherWidget from "./components/WeatherWidget";
import Pokemon from "./components/Pokemon";
import TwitchEmbedVideo from "react-twitch-embed-video";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TextCon />
      <Cards />

      <div className="d-flex justify-content-center align-items-center">
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-1 ">
          <WeatherWidget />
          <TwitchEmbedVideo
          channel='mcj_mcj'
          width='1080'
          height='640'
          hideChat='true'
          hideControls='true'
            />
        </div>
      </div>

      
    </div>
  );
}

export default App;
