import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import DayForecastPage from './pages/DayForecastPage'
import WeekForecastPage from './pages/WeekForecastPage'
import NotFound from './pages/404'
import CurrentWeatherPage from './pages/CurrentWeatherPage.jsx'
import { CityProvider } from './context/CityContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <CityProvider>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<CurrentWeatherPage />} />
            <Route path='DayForecast' element={<DayForecastPage />} />
            <Route path='WeekForecast' element={<WeekForecastPage />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </CityProvider>
    </BrowserRouter>
  </React.StrictMode>
)
