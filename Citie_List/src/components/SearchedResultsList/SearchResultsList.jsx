import React from 'react'
import "./SearchResultsList.css"
import SearchResults from '../SearchResultsItem/SearchResultsItem'

const SearchResultsList = (props) => {

    const { results } = props

    return (
        <div className='results-list'>
            {
                results.map((result, id) => {
                    return <SearchResults result={result} key={id} />
                })
            }
        </div>
    )
}

export default SearchResultsList
