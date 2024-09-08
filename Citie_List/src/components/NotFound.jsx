import React from 'react'
import "./NotFound.css"
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='not-found-container'>
            <div className='not-found-warning-text'>
                <h1>Page NotFound: 404</h1>
                <h3>It seems, You have give wrong address</h3>
                <Link to="/">
                    <p className='navigate-text'>Click here to go to Cities Page</p>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
