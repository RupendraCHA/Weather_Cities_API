import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import "./searchBar.css"
// import { useState } from 'react'

const SearchBar = (props) => {

    const { setResults, searchedResults } = props

    const [input, setInput] = useState("")
    // https://jsonplaceholder.typicode.com/users
    // / api / explore / v2.1 / catalog / datasets / geonames - all - cities -with-a - population - 1000 / records ? limit = 100 & refine= timezone % 3A % 22Asia % 22 & refine=cou_name_en % 3A % 22India % 22
    // https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100 //&refine=cou_name_en%3AIndia
    const fetchData = (value) => {
        fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100")
            .then((response) => response.json())
            .then((jsonData) => {
                const data = jsonData.results.filter(city => {
                    return value && city && city.name && city.name.toLowerCase().includes(value)
                })
                setResults(data)
                console.log(data)
                searchedResults(data, value)
            })

    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
        <div className='input-wrapper'>
            <FaSearch id='search-icon' />
            <input type='text' placeholder='Type to Search...' value={input} onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}

export default SearchBar
