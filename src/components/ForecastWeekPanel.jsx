import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CityFilter from './CityFilter';
import ForecastWeekCard from './ForecastWeekCard';
import Header from './Header';

const API_key = "8a6d1f5532a32b3653fcb67a7e726d99";

const ForecastWeekPanel = () => {
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

        const filteredData = {
          ...forecastData,
          list: forecastData.list.filter((item, index) =>
            [0, 8, 15, 23, 31, 39].includes(index)
          ),
        };
        setForecast(filteredData);
        console.log(filteredData);
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
    <>
      <CityFilter onFilterChange={handleFilterChange} onPageChange={handlePageChange} />
      <ForecastWeekCard
        showData={showData}
        loading={loading}
        forecast={forecast}
      />
    </>
  );
};

export default ForecastWeekPanel;
