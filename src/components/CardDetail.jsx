import React from 'react';
import Spinner from './Spinner';

import '../assets/CardDetail.css';

const CardDetail = ({ loading, weather, children }) => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const myDate = `${day}/${month}/${year}`;

  if (loading) {
    return <Spinner />;
  }

  if (!weather || !weather.name || !weather.sys || !weather.weather || weather.weather.length === 0) {
    return null;
  }

  return (
    <div className='cityCardContainer'>
      <div className='imgCityContainer'>
        {children}
      </div>
      <div className='cityInfo'>
        <h2>{weather.name}, {weather.sys.country}</h2>
        <h3>{myDate}</h3>
        <h4>{(weather.main.temp - 273.15).toFixed(1)}°C</h4>
        <div className='iconWeatherContainer'>
          <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weatherIcon" />
          {weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}
        </div>
        <div className='weatherInfo'>
          <h5>Min: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h5>
          <h5>Max: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>
          <h5>Sensación térmica: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h5>
          <h5>Humedad: {weather.main.humidity}%</h5>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;