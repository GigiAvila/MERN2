import React, { useState } from 'react'
import CurrentWeatherByLocation from '../components/CurrentWeather/CurrentWeatherByLocation'
import CurrentWeatherOtherCity from '../components/CurrentWeather/CurrentWeatherOtherCity'
import './CurrentWeatherPage.css'
import { useCity } from '../context/CityContext'
import DaySunImage from '../assets/DaySun.png'
import NightMoonImage from '../assets/NightMoon.png'

const CurrentWeatherPage = () => {
  const { location, currentCity } = useCity()

  const isDaytime =
    currentCity &&
    currentCity.dt >= currentCity.sys.sunrise &&
    currentCity.dt <= currentCity.sys.sunset

  return (
    <div className='nowContainer'>
      <>
        {location ? <CurrentWeatherOtherCity /> : <CurrentWeatherByLocation />}
        {currentCity ? (
          <div
            className='BGImageContainer'
            style={{
              backgroundImage: `url(${
                isDaytime ? DaySunImage : NightMoonImage
              })`
            }}
          ></div>
        ) : (
          <></>
        )}
      </>
    </div>
  )
}

export default CurrentWeatherPage
