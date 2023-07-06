
import React, { useState } from 'react';
import '../assets/ForecastCard.css';
import Spinner from './Spinner';

const ForecastCard = ({ loading, forecast }) => {
  const { list } = forecast;

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const myDate = `${day}/${month}/${year}`;

  const [moreItems, setmoreItems] = useState([]);

  const handleToggleDetails = (index) => {
    if (moreItems.includes(index)) {
      setmoreItems(moreItems.filter((item) => item !== index));
    } else {
      setmoreItems([...moreItems, index]);
    }
  };

  const months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ];

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDay = date.getDate().toString().padStart(2, '0');
    const formattedMonth = capitalizeFirstLetter(months[date.getMonth()]);
    return `${formattedDay} de ${formattedMonth}`;
  };

  if (loading) {
    return <Spinner />;
  }

  if (!forecast || !forecast.city || !list || list.length === 0) {
    return null;
  }

  return (
    <div className='ForecastCardContainer'>
      <div className='cityInfo'>
        <h2>Pronóstico extendido para <span>{forecast.city.name}, {forecast.city.country}</span></h2>
        <h3>{myDate}</h3>
      </div>
      <ul className='weatherForecast'>
        {list.slice(0, 12).map((item, index) => {
          const isNewDay = list[index - 1] && item.dt_txt.slice(11, 16) < list[index - 1].dt_txt.slice(11, 16);
          return (
            <li className='weatherForecastItem' key={index}>
              {isNewDay && (
                <div className='newDayContainer'>
                  <p>{formatDate(item.dt_txt)}</p>
                </div>
              )}
              <div className='principalInfo'>
                <h2>{item.dt_txt.slice(11, 16)}</h2>
                <h3>{(item.main.temp - 273.15).toFixed(1)}°</h3>
                <div className='iconForecastContainer'>
                  <img src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="weatherIcon" title={item.weather[0].description.charAt(0).toUpperCase() + item.weather[0].description.slice(1)} />
                </div>
                <p>💧{(item.pop.toFixed(1)) * 100}%</p>
                <i className='toggleIcon' onClick={() => handleToggleDetails(index)}>⬇️</i>
              </div>
              {moreItems.includes(index) && (
                <div className='additionalInfo'>
                  <h5>Sensación térmica: {(item.main.feels_like - 273.15).toFixed(1)}°C</h5>
                  <h5>Humedad: {item.main.humidity}%</h5>
                  <h5>Velocidad del viento: {item.wind.speed} m/s</h5>
                </div>
              )}

            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ForecastCard;
