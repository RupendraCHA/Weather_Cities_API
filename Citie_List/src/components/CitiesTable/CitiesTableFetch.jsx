import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/searchBar'
import SearchResultsList from '../SearchedResultsList/SearchResultsList'
import CityItem from '../CityRowData/CityItem'
import "./CitiesTableFetch.css"

function CitiesTableFetch() {

    const [results, setResults] = useState([])
    const [citiesData, setCitiesData] = useState([])


    const getCitiesData = async () => {
        const response = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100`)
        const data = await response.json()
        setCitiesData(data.results)
    }

    const searchedResults = (filteredData, value) => {
        if (value !== "") {
            setCitiesData(filteredData)
        } else {
            setCitiesData(data.results)
        }

    }


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
                                return <CityItem city={city} key={index} index={index} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CitiesTableFetch
