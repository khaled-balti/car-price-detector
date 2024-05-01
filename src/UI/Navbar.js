import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5" style={{minHeight: '100px'}}>
        <div className="container-fluid">
          <div className='fs-3' style={{fontWeight: 500}}>LOGO</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto d-flex align-items-center">
              <li className="nav-item me-5 w-100 text-center">
                <NavLink className={({isActive}) => isActive ? classes.active : classes.link} to="/" end>Home</NavLink>
              </li>
              <li className="nav-item me-5 w-100 text-center">
                <NavLink className={({isActive}) => isActive ? classes.active : classes.link} to="/offers" end>Offers</NavLink>
              </li>
              <li className="nav-item me-5 w-100 text-center">
                <NavLink className={({isActive}) => isActive ? classes.active : classes.link} to="/about" end>About</NavLink>
              </li>
              <li className="nav-item me-5 w-100 text-center">
                <NavLink className={({isActive}) => isActive ? classes.active : classes.link} to="/contact" end>Contact</NavLink>
              </li>
              <li className="nav-item me-5 w-100 text-center">
                <NavLink className={({isActive}) => isActive ? classes.active : classes.link} to="/login" end><button style={{border: 'none', width: '139px', height: '48px', borderRadius: '10px', backgroundImage: 'linear-gradient(to bottom, #1572D3, #0B3B6D)', color: 'white'}}>Login</button></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }


export default Navbar