import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CityFilter from './CityFilter';
import ForecastCard from './ForecastCard';
import Header from './Header';
import '../assets/ForecastPanel.css'

const API_key = "8a6d1f5532a32b3653fcb67a7e726d99";

const ForecastPanel = () => {
  const [forecast, setForecast] = useState([]);
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

      const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_key}&lang=es&q=${location}`;

      try {
        const forecastDataResponse = await fetch(urlForecast);
        if (!forecastDataResponse.ok) {
          throw new Error(forecastDataResponse.statusText);
        }
        const forecastData = await forecastDataResponse.json();
        setForecast(forecastData);
        console.log(forecastData);
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
    <div className='ForecastPanelContainer'>
      <CityFilter onFilterChange={handleFilterChange} onPageChange={handlePageChange} />
      <ForecastCard
        showData={showData}
        loading={loading}
        forecast={forecast}
      />
    </div>
  );
};

export default ForecastPanel;
