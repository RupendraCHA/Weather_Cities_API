import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import "./SearchResults.css"
import { Link } from 'react-router-dom';

const SearchResults = (props) => {


    const { result } = props
    return (
        <Link to="/cityWeather" className='link-styling'>
            <div className='search-result'>
                <p>{result.name}, {result.country_code}</p>
                <MdArrowOutward />
            </div>
        </Link>

    )
}

export default SearchResults
