import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CityFilter from './CityFilter';
import CardDetail from './CardDetail';
import UnsplashPhotos from './Unsplash';

const API_key = "8a6d1f5532a32b3653fcb67a7e726d99";

const WeatherPanel = () => {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (location === "") {
        return;
      }

      setLoading(true);

      const urlWeather = `http://api.openweathermap.org/data/2.5/weather?appid=${API_key}&lang=es&q=${location}`;

      try {
        const weatherDataResponse = await fetch(urlWeather);
        if (!weatherDataResponse.ok) {
          throw new Error(weatherDataResponse.statusText);
        }
        const weatherData = await weatherDataResponse.json();
        setWeather(weatherData);
        console.log(weatherData);
        setLoading(false);
        setShowData(true);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setShowData(false);
      }
    };

    fetchData();
  }, [location]);

  const handleFilterChange = (loc) => {
    setLocation(loc);
  };

  const handlePageChange = (page) => {
    navigate(page);
  };

  return (
    <div className='weatherPanelDiv'>
      <CityFilter onFilterChange={handleFilterChange} onPageChange={handlePageChange} />
      <CardDetail showData={showData} loading={loading} weather={weather}>
        {showData && (
          <UnsplashPhotos query={weather.name} />
        )}
      </CardDetail>
    </div>
  );
};

export default WeatherPanel;
