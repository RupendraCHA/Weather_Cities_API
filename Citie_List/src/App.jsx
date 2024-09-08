import CitiesTableFetch from "./CitiesTableFetch";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CityView from "./components/CityView";
import NotFound from "./components/NotFound";

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
