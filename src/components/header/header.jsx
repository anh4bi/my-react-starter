import React from 'react'
import './header.css'

const Header = ({ name }) => {
    return (
        <>
            <h1 className='header'>{name}</h1>
        </>
    )
}

export default Header


