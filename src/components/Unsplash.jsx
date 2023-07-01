
// Unsplash.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const API_KEY = 'xbAGDjOpNxxyimeGB9uSHzi4o-otMypVh1qR-WEGfuQ';

const UnsplashPhotos = ({ query }) => {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`https://api.unsplash.com/search/photos?&query=${query}&orientation=landscape&order_by=relevant&client_id=${API_KEY}`);

        const data = response.data;
        console.log(data);
        setPhoto(data.results[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [query]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {photo && <img src={photo.urls.regular} alt={photo.alt_description} />}
    </>
  );
};

export default UnsplashPhotos;
