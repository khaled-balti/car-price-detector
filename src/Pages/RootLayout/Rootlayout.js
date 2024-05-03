import React, { useState, Fragment } from 'react'
import Navbar from '../../UI/Navbar'
import { Outlet } from 'react-router'
import Car from '../../images/car1.jpeg'
const Rootlayout = () => {
  const offers = [
    {
      name: 'Mercedes sport',
      theme: 'SUV',
      image: Car,
      fuel: 'essence',
      drive: 'auto',
      motor: '7',
      price: '127 000'
    },
    {
      name: 'KIA sport',
      theme: 'SUV',
      image: Car,
      fuel: 'essence',
      drive: 'auto',
      motor: '7',
      price: '127 000'
    },
    {
      name: 'Lamborgini sport',
      theme: 'SUV',
      image: Car,
      fuel: 'essence',
      drive: 'auto',
      motor: '7',
      price: '127 000'
    },
    {
      name: 'Peugeot sport',
      theme: 'SUV',
      image: Car,
      fuel: 'essence',
      drive: 'auto',
      motor: '7',
      price: '127 000'
    },
    {
      name: 'Peugeot suv',
      theme: 'SUV',
      image: Car,
      fuel: 'essence',
      drive: 'auto',
      motor: '7',
      price: '127 000'
    },
  ]
  const [cars, setCars] = useState(offers)
  return (
    <Fragment>
        <Navbar offers={offers} cars={cars} setCars={setCars}/>
        <main className='overflow-hidden' style={{backgroundColor: "#e9e9e9"}}>
            <Outlet context={[cars]} />
        </main>
    </Fragment>
  )
}

export default Rootlayout