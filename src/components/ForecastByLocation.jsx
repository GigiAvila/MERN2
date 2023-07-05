import React, { useState, useEffect } from 'react';
import ForecastCard from './ForecastCard';
import Spinner from './Spinner';

const API_KEY = "8a6d1f5532a32b3653fcb67a7e726d99";

const ForecastByLocation = () => {
  const [location, setLocation] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
          },
          (error) => {
            console.log(error);
            setLoading(false);
          }
        );
      } else {
        console.log("No es posible usar la geolocalización en este navegador");
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    if (location !== null) {
      const { latitude, longitude } = location;

      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=es`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          setForecastData(data);
          setLoading(false);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, [location]);

  const handleLocationRequest = () => {
    setLoading(true);
    setLocation(null);
  };

  return (
    <div className='ForecastByLocationContainer'>
      {loading ? (
        <Spinner />
      ) : forecastData && forecastData.list.length > 0 ? (
        <ForecastCard forecast={forecastData} />
      ) : (
        <div>
          <p>No se encontraron datos de pronóstico.</p>
          <button onClick={handleLocationRequest}>Obtener ubicación</button>
        </div>
      )}
    </div>
  );
};

export default ForecastByLocation;
