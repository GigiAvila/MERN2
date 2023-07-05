import React, { useState, useEffect } from 'react';
import ForecastWeekCard from './ForecastWeekCard';
import Spinner from './Spinner';

const API_KEY = "8a6d1f5532a32b3653fcb67a7e726d99";

const ForecastWeekByLocation = () => {
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
        console.log("Geolocation is not supported by this browser.");
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
          // Filter the data to keep only the elements at positions 0, 8, 15, 23, 31, and 39
          const filteredData = {
            ...data,
            list: data.list.filter((item, index) =>
              [0, 8, 15, 23, 31, 39].includes(index)
            ),
          };

          setForecastData(filteredData);
          setLoading(false);
          console.log(filteredData);
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
    <div className='ForecastWeekByLocationContainer'>
      {loading ? (
        <Spinner />
      ) : forecastData && forecastData.list.length > 0 ? (
        <ForecastWeekCard forecast={forecastData} />
      ) : (
        <div>
          <p>No se encontraron datos de pronóstico.</p>
          <button onClick={handleLocationRequest}>Obtener ubicación</button>
        </div>
      )}
    </div>
  );
};

export default ForecastWeekByLocation;
