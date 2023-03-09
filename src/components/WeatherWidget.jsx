import React, { useState, useEffect } from 'react';

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Guadalajara,mx&units=metric&appid=225c1412c6ad679e57538d0c22254a3d`;

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setWeather(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {weather ? (
        <>
          <h2>El clima en Guadalajara:</h2>
          <p><strong>Temperatura:</strong> {weather.main.temp} &#8451;</p>
          <p><strong>Descripción:</strong> {weather.weather[0].description}</p>
          <p><strong>Humedad:</strong> {weather.main.humidity}%</p>
          <p><strong>Viento:</strong> {weather.wind.speed} km/h</p>
          
          
        </>
      ) : (
        <p>Cargando...</p>
       
      )}
    </div>
  );
}

export default WeatherWidget;