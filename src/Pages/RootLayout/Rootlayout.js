import React, { Fragment } from 'react'
import Navbar from '../../UI/Navbar'
import { Outlet } from 'react-router'

const Rootlayout = () => {
  return (
    <Fragment>
        <Navbar/>
        <main className='overflow-hidden' style={{backgroundColor: "#e9e9e9"}}>
            <Outlet/>
        </main>
    </Fragment>
  )
}

export default Rootlayout