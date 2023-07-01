// WeatherByLocation.jsx
import React, { useState, useEffect } from 'react';
import CardDetail from './CardDetail';
import Spinner from './Spinner';
import UnsplashPhotos from './Unsplash';

const API_KEY = "8a6d1f5532a32b3653fcb67a7e726d99";

const WeatherByLocation = () => {
  const [location, setLocation] = useState(null);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cityImage, setCityImage] = useState(null);

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
            setPermissionDenied(true);
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

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=es`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          setWeatherData(data);
          setLoading(false);
          const imageUrl = data.weather[0].name; // Obtén el nombre del clima
          setCityImage(imageUrl); // Establece la URL de la imagen de Unsplash
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, [location]);

  const handleLocationRequest = () => {
    setPermissionDenied(false);
    setLoading(true);
    setLocation(null);
  };

  return (
    <>
      {permissionDenied ? (
        <p>Debes activar los permisos de geolocalización en tu navegador para utilizar la aplicación.</p>
      ) : loading ? (
        <Spinner />
      ) : weatherData ? (
        <>
          <CardDetail weather={weatherData} showData={true} loading={loading} cityImage={cityImage}>
            <UnsplashPhotos query={weatherData.weather[0].name} />
          </CardDetail>
        </>
      ) : (
        <div>
          <p>No se encontraron datos climáticos.</p>
          <button onClick={handleLocationRequest}>Obtener ubicación</button>
        </div>
      )}
    </>
  );
};

export default WeatherByLocation;
