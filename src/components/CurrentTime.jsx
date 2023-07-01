import React, { useState, useEffect } from 'react';



const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTimeValue = (value) => {
    return value.toString().padStart(2, '0');
  };

  const hours = formatTimeValue(currentTime.getHours());
  const minutes = formatTimeValue(currentTime.getMinutes());
  const seconds = formatTimeValue(currentTime.getSeconds());

  return (
    <h2>{hours}:{minutes}:{seconds} HS</h2>
  );
};

export default CurrentTime;
