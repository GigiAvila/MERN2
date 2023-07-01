import React, { useState } from 'react';
import ForecastByLocation from '../components/ForecastByLocation';
import ForecastPanel from '../components/ForecastPanel';

const DayForecast = () => {
  const [showForecastPanel, setShowForecastPanel] = useState(false);
  const [forecastInfo, setForecastInfo] = useState(null);

  const handleToggleForecastPanel = () => {
    setShowForecastPanel(!showForecastPanel);
  };

  const handleForecastInfoChange = (info) => {
    setForecastInfo(info);
  };

  return (
    <div className='DayForecastContainer'>
      <button className="buttonToggle" onClick={handleToggleForecastPanel}>
        {showForecastPanel ? 'Volver a mi ciudad' : 'Consulta el clima en otra ciudad'}
      </button>
      {showForecastPanel ? (
        <ForecastPanel onForecastInfoChange={handleForecastInfoChange} />
      ) : (
        <ForecastByLocation onForecastInfoChange={handleForecastInfoChange} />
      )}
    </div>
  );
};

export default DayForecast;
