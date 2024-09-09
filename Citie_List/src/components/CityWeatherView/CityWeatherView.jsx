import React from 'react'
import "./CityWeatherView.css"
import CurrentWeather from '../CurrentWeatherCard/CurrentWeatherCard'

const CityView = (props) => {

    const { cityName } = props
    console.log(cityName)

    return (
        <>
            <CurrentWeather cityName={cityName} />
        </>

    )
}

export default CityView
