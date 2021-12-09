import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

const Header = ({ name }) => {
    return (
        <React.Fragment>
            <div className='header__container'>
                <h1 className='brand__name'>{name}</h1>
                <div className='navigation__bar'>
                    <Link className='nav__item active' to="/">HOME</Link>
                    <Link className='nav__item' to="/about">About</Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header


