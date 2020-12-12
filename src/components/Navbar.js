import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-header">
                    <Link to='/' className='navbar-brand'>kpReact</Link>

                </div>
                <ul className="nav nav-pills justify-content-end">
                    <li className='nav-item' ><NavLink className='nav-link' exact to='/'>Home</NavLink></li>
                    <li className='nav-item' ><NavLink className='nav-link' to='/image'>Image</NavLink></li>
                    <li className='nav-item' ><NavLink className='nav-link' to='/about'>About</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;