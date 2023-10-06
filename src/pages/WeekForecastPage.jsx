import React from 'react'
import WeekForecast from '../components/WeekForcast/WeekForecast'
import '../components/WeekForcast/WeekForecastCard.css'
import './WeekForecastPage.css'
import NightMoon from '../assets/NightMoon.png'
import DaySun from '../assets/DaySun.png'
import { useCity } from '../context/CityContext'

const WeekForecastPage = () => {
  const { currentCity } = useCity()

  return (
    <div className='forecastWeekContainer'>
      <div className='weekImageContainer'>
        {currentCity.weather[0].icon.endsWith('n') ? (
          <img
            src={NightMoon}
            alt='NightMoon'
            className='slide-in-blurred-right'
          />
        ) : (
          <img src={DaySun} alt='DaySun' className='slide-in-blurred-right' />
        )}
      </div>
      <WeekForecast />
    </div>
  )
}

export default WeekForecastPage
