import React from 'react'
import "./CurrentWeatherCard.css"

const CurrentWeather = () => {
    return (
        <div className='current-weather-card'>
            <div className='weather'>
                <div className='weather-details1'>
                    <div>
                        <p className='city'>Belgrade</p>
                        <p className='weather-description'>Sunny</p>
                    </div>
                    <img alt='weather' className='weather-icon' src='icons/01d.png' />
                </div>
                <div className='weather-details2'>
                    <p className='temperature'>18°C</p>
                    <div className='parameter-details'>
                        <div className='parameter-row'>
                            <p className='parameter-label header'>Details:</p>
                        </div>
                        <div className='parameter-row'>
                            <p className='parameter-label'>Feels Like:</p>
                            <p className='parameter-value'>22°C</p>
                        </div>
                        <div className='parameter-row'>
                            <p className='parameter-label'>Wind Speed:</p>
                            <p className='parameter-value'>2m/s</p>
                        </div>
                        <div className='parameter-row'>
                            <p className='parameter-label'>Humidity:</p>
                            <p className='parameter-value'>15%</p>
                        </div>
                        <div className='parameter-row'>
                            <p className='parameter-label'>Pressure:</p>
                            <p className='parameter-value'>1000mmHg</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CurrentWeather
