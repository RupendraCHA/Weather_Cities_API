import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/searchBar'
import SearchResultsList from '../SearchedResultsList/SearchResultsList'
import CityItem from '../CityRowData/CityItem'
import "./CitiesTableFetch.css"
import CityView from '../CityWeatherView/CityWeatherView'

function CitiesTableFetch() {

    const [results, setResults] = useState([])
    const [citiesData, setCitiesData] = useState([])
    const [isClicked, setValue] = useState(false)
    const [cityName, setCityName] = useState("Delhi")


    const getCitiesData = async () => {
        const response = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100`)
        const data = await response.json()
        setCitiesData(data.results)
    }
    // console.log(cityList)

    const searchedResults = (filteredData, value) => {
        if (value !== "") {
            setCitiesData(filteredData)
        } else {
            setCitiesData(data.results)
        }

    }

    const getCityViewIsActiveOrNot = (boolValue, name) => {
        setValue(boolValue)
        setCityName(name)
        // console.log(boolValue)
        // console.log(name)
    }

    // const getCityName = (cityName) => {
    //     // console.log(cityName)

    // }

    useEffect(() => {
        getCitiesData();
    }, [])


    return (

        <div className='app'>
            <div className='search-bar-container'>
                <SearchBar setResults={setResults} searchedResults={searchedResults} />
                <SearchResultsList results={results} />
            </div>
            <div>
                <h1>Select the city to view its current and forecast weather:</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>Timezone</th>
                            <th>Longitude</th>
                            <th>Latitude</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            citiesData.map((city, index) => {
                                {/* console.log(index) */ }
                                return <CityItem city={city} key={index}
                                    index={index}
                                    getCityViewIsActiveOrNot={getCityViewIsActiveOrNot}
                                    isClicked={isClicked}

                                />
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div style={{ display: "none" }}>
                <CityView cityName={cityName} />
            </div>

        </div>
    )
}

export default CitiesTableFetch
