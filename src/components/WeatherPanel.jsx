
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CityFilter from './CityFilter';
import CardDetail from './CardDetail';
import UnsplashPhotos from './Unsplash';

const API_key = "8a6d1f5532a32b3653fcb67a7e726d99";

const WeatherPanel = () => {
  const [weatherByCity, setWeatherByCity] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [locationInput, setLocationInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (locationInput === "") {
        return;
      }

      setLoading(true);

      const urlWeather = `http://api.openweathermap.org/data/2.5/weather?appid=${API_key}&lang=es&q=${locationInput}`;

      try {
        const weatherDataResponse = await fetch(urlWeather);
        if (!weatherDataResponse.ok) {
          throw new Error(weatherDataResponse.statusText);
        }
        const weatherDataByCity = await weatherDataResponse.json();
        setWeatherByCity(weatherDataByCity);
        console.log(weatherDataByCity);
        setLoading(false);
        setShowData(true);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setShowData(false);
      }
    };

    fetchData();
  }, [locationInput]);

  const handleFilterChange = (location) => {
    setLocationInput(location);
  };

  const handlePageChange = (page) => {
    navigate(page);
  };

  return (
    <>
      <CityFilter onFilterChange={handleFilterChange} onPageChange={handlePageChange} />
      <div className='weatherPanelDisplay'>
        <CardDetail showData={showData} loading={loading} weather={weatherByCity}>
          {showData && (
            <UnsplashPhotos query={weatherByCity.name} />
          )}
        </CardDetail>
      </div>
    </>
  );
};

export default WeatherPanel;