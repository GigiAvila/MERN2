import React, { useState } from 'react';
import ForecastWeekByLocation from '../components/ForecastWeekByLocation';
import ForecastWeekPanel from '../components/ForecastWeekPanel';

const WeekForecast = () => {
  const [showForecastPanel, setShowForecastPanel] = useState(false);
  const [forecastInfo, setForecastInfo] = useState(null);

  const handleToggleForecastPanel = () => {
    setShowForecastPanel(!showForecastPanel);
  };

  const handleForecastInfoChange = (info) => {
    setForecastInfo(info);
  };

  return (
    <div className='WeekForecastContainer1'>

      {showForecastPanel ? (
        <ForecastWeekPanel onForecastInfoChange={handleForecastInfoChange} />
      ) : (
        <ForecastWeekByLocation onForecastInfoChange={handleForecastInfoChange} />
      )}
      <button className="buttonToggle" onClick={handleToggleForecastPanel}>
        {showForecastPanel ? 'Volver a mi ciudad' : 'Consulta el clima en otra ciudad'}
      </button>
    </div>
  );
};

export default WeekForecast;

