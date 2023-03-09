import React, { useState, useEffect } from "react";
import Card from "./Card";
import mine from "../assets/mine.jpg"

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Guadalajara,mx&units=metric&appid=225c1412c6ad679e57538d0c22254a3d`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.log(error));
  }, []);

  
  return (
    <div>
      
        {weather ? (
          <>
           <Card 
            title={<h2>El clima en Guadalajara</h2>}
            imageSource={mine}
            
            url={"https://www.meteored.mx/clima_Guadalajara-America+Norte-Mexico-Jalisco-MMGL-1-21046.html"}
            btntext={"ir a otra fuente"}
            text={
              <p>
                <strong>Temperatura:</strong> {weather.main.temp} &#8451;<br></br>
                <strong>Descripción:</strong> {weather.weather[0].description}<br></br>
                <strong>Humedad:</strong> {weather.main.humidity}%<br></br>
                <strong>Viento:</strong> {weather.wind.speed} km/h <br></br>
                <strong>Pais:  </strong> Mexico
              </p>
                
               
            }
          />
          </>
        ) : (
          <p>Cargando...</p>
        )}
        
         
        
  
    </div>
  );
}

export default WeatherWidget;
