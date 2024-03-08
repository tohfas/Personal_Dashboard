import React, { useState, useEffect } from 'react';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const apiKey = '97a3e55aff7bb2f5058556a453d2ff14';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [apiKey, city]);

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-md">
      <input
        type="text"
        placeholder="Enter city"
        className="w-full mb-4 p-2 border rounded"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {weatherData && weatherData.name && (
        <div>
          <h2 className="text-xl font-bold mb-2">Weather in {weatherData.name}</h2>
          <p className="mb-2">{weatherData.weather[0].description}</p>
          <p className="mb-2">Temperature: {weatherData.main.temp}°C</p>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
