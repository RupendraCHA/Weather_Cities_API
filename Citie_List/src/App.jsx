import CitiesTableFetch from "./components/CitiesTable/CitiesTableFetch";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CityView from "./components/CityWeatherView/CityWeatherView";
import NotFound from "./components/NotFoundPage/NotFound";

import React from 'react'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CitiesTableFetch />} />
          <Route exact path="/cityWeather" element={<CityView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
