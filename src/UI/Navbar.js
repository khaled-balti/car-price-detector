import React, {useState} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import classes from './Navbar.module.css'
import Loop from './Loop'
import Filter from './Filter'

const Navbar = ({setCars, offers}) => {
  const location = useLocation()
  const filterByName = (e) => {
    console.log(e.target.value)
    setCars(offers.filter(offers => offers.name.startsWith(e.target.value)))
  }
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 position-fixed" style={{minHeight: '100px', width: '100%', zIndex: 3}}>
        <div className="container-fluid">
          <div className='d-flex align-items-center'>
            <p className='fs-3 me-5 mt-3' style={{fontWeight: 500}}>LOGO</p>
            {location.pathname === '/offers' && <div className={`d-flex ${classes.fullinput} justify-content-evenly align-items-center`}>
              <Loop/>
              <input type='text' className={classes.search} name='name' style={{width: '80%', height: '30px'}} onChange={filterByName} />
              <Filter/>
            </div>}
          </div>
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
                <NavLink className={({isActive}) => isActive ? classes.active : classes.link} to="/contact" end>Contact</NavLink>
              </li>
              <li className="nav-item me-5 w-100 text-center">
                <NavLink className={({isActive}) => isActive ? classes.active : classes.link} to="/login" end><button style={{border: 'none', width: '139px', height: '48px', borderRadius: '10px', backgroundImage: 'linear-gradient(to bottom, #1572D3, #0B3B6D)', color: 'white'}}>Login</button></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }


export default Navbar