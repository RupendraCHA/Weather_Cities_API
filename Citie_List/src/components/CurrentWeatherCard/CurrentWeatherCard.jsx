import React, { useEffect, useState } from 'react'
import './CurrentWeatherCard.css'

const CurrentWeather = (props) => {

    const { cityName } = props
    const [cityDetails, setCityDetails] = useState([])
    const citiesList = [
        'Rotenburg',
        'Ronshausen',
        'Römhild',
        'Rohrbach',
        'Rohr',
        'Ringelai',
        'Riegel',
        'Rhens',
        'Retgendorf',
        'Rehe',
        'Regenstauf',
        'Rastede',
        'Raitenbuch',
        'Raisdorf',
        'Putbus',
        'Priesendorf',
        'Pottum',
        'Postmünster',
        'Pleiskirchen',
        'Perach',
        'Pech',
        'Paunzhausen',
        'Patersdorf',
        'Ostseebad Boltenhagen',
        'Osterrönfeld',
        'Ossendorf',
        'Osnabrück',
        'Oldenburg',
        'Odelzhausen',
        'Ochsenfurt',
        'Oberriexingen',
        'Oberndorf',
        'Oberhausen-Rheinhausen',
        'Oberhausen',
        'Oberaula',
        'Niederroßla',
        'Niedernberg',
        'Niederlauer',
        'Niebüll',
        'Neustadt am Rennsteig',
        'Neukirchen',
        'Neuhäusel',
        'Neuenstein',
        'Neuburg',
        'Nersingen',
        'Nellingen',
        'Münsterhausen',
        'Munningen',
        'Mühlhausen',
        'Mücka',
        'Monakam',
        'Mindelheim',
        'Michelstadt',
        'Meuselbach',
        'Mellingen',
        'Mehlingen',
        'Mechterstädt',
        'Markgröningen',
        'Mainbernheim',
        'Löcknitz',
        'Loburg',
        'Legden',
        'Lauffen am Neckar',
        'Langewiesen',
        'Lähden',
        'Bad Laasphe',
        'Kupferzell',
        'Kührstedt',
        'Kronburg',
        'Kronau',
        'Krölpa',
        'Krakow am See',
        'Kötzschau',
        'Konradsreuth',
        'Kist',
        'Kirchenpingarten',
        'Kemnath',
        'Karlsfeld',
        'Jünkerath',
        'Jübek',
        'Jockgrim',
        'Jacobsdorf',
        'Immelborn',
        'Ilsfeld',
        'Homberg',
        'Hohenfels',
        'Höchstädt an der Donau',
        'Höchstadt an der Aisch',
        'Hildrizhausen',
        'Hilbersdorf',
        'Heusweiler',
        'Hettstedt',
        'Henfenfeld',
        'Hellersdorf',
        'Heinsen',
        'Heinbockel',
        'Heinade',
        'Hatten',
        'Haseldorf',
        'Hartmannsdorf',
        'Shīnḏanḏ',
        'Shaykh Amīr Kêlay',
        'Sidqābād',
        'Sar-e Pul',
        'Rustāq',
        'Narang',
        'Māymay',
        'Kaz̲h̲ah',
        'Istālif',
        'Dasht-e Archī',
        'Darāyim',
        'Charkh',
        'Wuluswālī ‘Alīngār',
        'Markaz-e Woluswalī-ye Āchīn',
        'George Hill',
        'Finiq',
        'Qereshnik',
        'Pirg',
        'Orenjë',
        'Lunik',
        'Librazhd',
        'Kodovjat',
        'Vlorë',
        'Shëngjin',
        'Peza e Madhe',
        'Dhërmi',
        'Allambres',
        'Lapardha Dy',
        'Artashat',
        'Yeraskhahun',
        'Vaghashen',
        'Geghakert',
        'Karbi',
        'Getashen',
        'Haykavan',
        'Arbat’',
        'Haykashen',
        'Dundo',
        'Dala',
        'Calulo',
        'Caconda',
        'San Francisco de Laishi',
        'Ruiz de Montoya',
        'Ciudad del Libertador General San Martín',
        'Coté-Lai',
        'Castelli',
        'Villa Media Agua',
        'Villa Concepción del Tío',
        'Suncho Corral',
        'Santa Magdalena',
        'San Martín',
        'Rafaela',
        'Quimilí',
        'Puerto Deseado',
        'Puán',
        'Pocito',
        'Pellegrini',
        'Malvinas Argentinas',
        'Inriville',
        'Graneros',
        'Los Toldos',
        'Etruria',
        'El Galpón',
        'El Carril',
        'Darwin',
        'Chorotis',
        'Chicoana',
        'Carlos Tejedor',
        'Calingasta',
        'Calchaquí',
        'Armstrong',
        'Apolinario Saravia',
        'Altos de Chipión',
        'La Punta',
        'Wörterberg',
        'Wörgl',
        'Werfen',
        'Weiz',
        'Wallsee',
        'Waldprechting',
        'Voitsberg',
        'Velm',
        'Untertauern',
        'Tobaj',
        'Theresienfeld',
        'Sulzberg',
        'Strobl',
        'Straßgang',
        'Steinach am Brenner',
        'Stainz bei Straden',
        'Seekirchen am Wallersee',
        'Schwertberg',
        'Schwarzach',
        'Schwanenstadt',
        'Schwanberg',
        'Schönau an der Triesting',
        'Schattendorf',
        'Schärding',
        'Sautens',
        'Sankt Veit im Pongau'
    ]

    // const citiesList = [
    //     'Adilabad',
    //     'Anantapur',
    //     'Chittoor',
    //     'Kakinada',
    //     'Guntur',
    //     'Hyderabad',
    //     'Karimnagar',
    //     'Khammam',
    //     'Krishna',
    //     'Kurnool',
    //     'Mahbubnagar',
    //     'Medak',
    //     'Nalgonda',
    //     'Nizamabad',
    //     'Ongole',
    //     'Hyderabad',
    //     'Srikakulam',
    //     'Nellore',
    //     'Visakhapatnam',
    //     'Vizianagaram',
    //     'Warangal',
    //     'Eluru',
    //     'Kadapa',
    // ]

    let cityIndex1 = citiesList[Math.floor(Math.random() * citiesList.length)]
    let cityIndex2 = citiesList[Math.floor(Math.random() * citiesList.length)]
    let cityIndex3 = citiesList[Math.floor(Math.random() * citiesList.length)]

    // console.log(cityIndex)

    let weather = ['Sunny', "Broken Clouds", "Mist", "Rainy", "Clody", "Small Showers",]

    const getCityWeatherData = async () => {
        const cityDataResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityIndex}&appid=e55c95e24c1517c0eabef2f375a129a2&units=metric`)
        const cityWeatherData = await cityDataResponse.json()
        setCityDetails(cityWeatherData)
        // console.log(cityWeatherData)
    }

    console.log(cityDetails)
    // console.log(cityDetails.weather[0].icon)
    // console.log(cityDetails.main.temp)

    const temp = [21, 27, 10, -5, 8, 22, 34, 45, 19, 28, 16, -16, 37]
    let temperature1 = temp[Math.floor(Math.random() * temp.length)]

    let temperature2 = temp[Math.floor(Math.random() * temp.length)]
    let temperature3 = temp[Math.floor(Math.random() * temp.length)]

    useEffect(() => {
        getCityWeatherData()
    }, [])
    // console.log(cityName)°

    return (
        <div>
            <div className='current-weather-card'>
                <div className='weather'>
                    <div className='weather-details1'>
                        <div>
                            <p className='city'>{`${cityIndex1}`}</p>
                            <p className='weather-description'>Sunny</p>
                        </div>
                        <img alt='weather' className='weather-icon' src={`icons/01d.png`} />
                    </div>
                    <div className='weather-details2'>
                        <p className='temperature'>{`${temperature1}`}°C</p>
                        <div className='parameter-details'>
                            <div className='parameter-row'>
                                <p className='parameter-label header'>Details:</p>
                            </div>
                            <div className='parameter-row'>
                                <p className='parameter-label'>Feels Like:</p>
                                <p className='parameter-value'>22°C</p>
                            </div>
                            <div className='parameter-row'>
                                <p className='parameter-label'>Wind Speed</p>
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
            <div className='current-weather-card'>
                <div className='weather'>
                    <div className='weather-details1'>
                        <div>
                            <p className='city'>{`${cityIndex2}`}</p>
                            <p className='weather-description'>Sunny</p>
                        </div>
                        <img alt='weather' className='weather-icon' src={`icons/01d.png`} />
                    </div>
                    <div className='weather-details2'>
                        <p className='temperature'>{`${temperature2}`}°C</p>
                        <div className='parameter-details'>
                            <div className='parameter-row'>
                                <p className='parameter-label header'>Details:</p>
                            </div>
                            <div className='parameter-row'>
                                <p className='parameter-label'>Feels Like:</p>
                                <p className='parameter-value'>22°C</p>
                            </div>
                            <div className='parameter-row'>
                                <p className='parameter-label'>Wind Speed</p>
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
            <div className='current-weather-card'>
                <div className='weather'>
                    <div className='weather-details1'>
                        <div>
                            <p className='city'>{`${cityIndex3}`}</p>
                            <p className='weather-description'>Sunny</p>
                        </div>
                        <img alt='weather' className='weather-icon' src={`icons/01d.png`} />
                    </div>
                    <div className='weather-details2'>
                        <p className='temperature'>{`${temperature3}`}°C</p>
                        <div className='parameter-details'>
                            <div className='parameter-row'>
                                <p className='parameter-label header'>Details:</p>
                            </div>
                            <div className='parameter-row'>
                                <p className='parameter-label'>Feels Like:</p>
                                <p className='parameter-value'>22°C</p>
                            </div>
                            <div className='parameter-row'>
                                <p className='parameter-label'>Wind Speed</p>
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
        </div>


    )
}

export default CurrentWeather
