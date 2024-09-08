import React from 'react'
import { Link } from "react-router-dom"
import "./CityItem.css"

const CityItem = (props) => {

  const { city } = props

  return (
    (<tr className='city-row' key={city.id} >
      <td><Link to="/cityWeather" className='city-name'>
        {city.name}
      </Link></td>
      <td>{city.cou_name_en}</td>
      <td>{city.timezone}</td>
      <td>{city.coordinates.lon}</td>
      <td>{city.coordinates.lat}</td>
    </tr >)
  )
}

export default CityItem
