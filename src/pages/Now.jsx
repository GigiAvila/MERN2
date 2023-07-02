import React, { useState } from 'react';
import WeatherByLocation from '../components/WeatherByLocation';
import WeatherPanel from '../components/WeatherPanel';
import '../assets/Now.css';

const Now = () => {
  const [showWeatherPanel, setShowWeatherPanel] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState(null);

  const handleToggleWeatherPanel = () => {
    setShowWeatherPanel(!showWeatherPanel);
  };

  const handleWeatherInfoChange = (info) => {
    setWeatherInfo(info);
  };

  return (
    <div className='NowContainer'>
      <button className='buttonToggle' onClick={handleToggleWeatherPanel}>
        {showWeatherPanel ? 'Volver a mi ciudad' : 'Consulta el clima en otra ciudad'}
      </button>
      {showWeatherPanel ? (
        <WeatherPanel onWeatherInfoChange={handleWeatherInfoChange} weatherInfo={weatherInfo} />
      ) : (
        <WeatherByLocation onWeatherInfoChange={handleWeatherInfoChange} />
      )}
    </div>
  );
};

export default Now;