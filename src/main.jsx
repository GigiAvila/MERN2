import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'



import DayForecast from './pages/DayForecast'
import WeekForecast from './pages/WeekForecast'
import NotFound from './pages/404'
import Now from './pages/Now.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Now />} />
          <Route path='DayForecast' element={<DayForecast />} />
          <Route path='WeekForecast' element={<WeekForecast />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
