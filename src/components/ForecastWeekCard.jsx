import React, { useState } from 'react';
import '../assets/ForecastWeekCard.css';
import Spinner from './Spinner';

const ForecastWeekCard = ({ loading, forecast }) => {
  const { list } = forecast;

  if (loading) {
    return <Spinner />;
  }

  if (!forecast || !forecast.city || !list || list.length === 0) {
    return null;
  }

  return (
    <div className={`ForecastWeekCardContainer`}>
      <h2>Pronóstico semanal para <span>{forecast.city.name}, {forecast.city.country}</span></h2>
      <ul className='weekForecastUl'>
        {list.map((item, index) => (
          <li className='weekForecastItem' key={index}>
            <h2>{(item.dt_txt.slice(5, 11)).replace('-', '/')}</h2>
            <h3>{(item.main.temp - 273.15).toFixed(1)}°</h3>
            <div className='iconWeekForecastContainer'>
              <img src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="weatherWeekIcon" title={item.weather[0].description.charAt(0).toUpperCase() + item.weather[0].description.slice(1)} />
            </div>
            <p>💧{(item.pop.toFixed(1)) * 100}%</p>
            <h5>Sensación: {(item.main.feels_like - 273.15).toFixed(1)}°C</h5>
            <h5>Humedad: {item.main.humidity}%</h5>
            <h5>Viento: {item.wind.speed} m/s</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForecastWeekCard;
