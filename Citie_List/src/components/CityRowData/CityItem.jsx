import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./CityItem.css"
import { Dropdown } from "antd"
// import CurrentWeatherCard from "../CurrentWeatherCard/CurrentWeatherCard"

const CityItem = (props) => {

  const { city, index, getCityViewIsActiveOrNot, isClicked } = props

  const handleOnclick = (a, name) => {
    getCityViewIsActiveOrNot(a, name)
    // getCityName(name)
    // console.log(a)
    // console.log(name)
  }


  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" href="/cityWeather">
          View Weather in new tab
        </a>
      ),
    }
  ]
  return (
    (<tr className='city-row' key={city.id}>
      <td>{index + 1}</td>
      <Dropdown menu={{ items }} trigger={['contextMenu']}>
        <td onClick={() => handleOnclick(true, city.name)}><Link to="/cityWeather" className='city-name'>
          {city.name}
        </Link></td>
      </Dropdown>
      <td>{city.cou_name_en}</td>
      <td>{city.timezone}</td>
      <td>{city.coordinates.lon}</td>
      <td>{city.coordinates.lat}</td>
    </tr >)
  )
}

export default CityItem
