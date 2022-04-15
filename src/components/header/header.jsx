import React from 'react'
import { useContext } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './header.css'
import LoadingContext from 'core/context/loading-context'

const Header = ({ name }) => {
  const { isLoading } = useContext(LoadingContext);


    return (
        <React.Fragment>
            <div className={`loader ${ !isLoading ? 'loading_none' : 'loading' }`} ></div>
            <div className='header__container'>
                <h1 className='brand__name'>{name}</h1>
                <div className='navigation__bar'>
                    <NavLink className='nav__item active' to="/">HOME</NavLink>
                    <NavLink className='nav__item' to="/about">About</NavLink>
                </div>
            </div>
        </React.Fragment>
    )
}

const NavLink = ({ to, children }) => {

    let resolvedPath = useResolvedPath(to)
    let match = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <Link className={`nav__item ${match ? 'active' : ''}`} to={to}>
            {children}  {resolvedPath === to ? <span className='nav__item__active'></span> : ''}    </Link>)
}

export default Header
