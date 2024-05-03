import React from 'react'
import classes from './BrandFilter.module.css'
const BrandFilter = () => {
  return (
    <div className={`container-fluid ${classes.bigContainer} py-4`}>
        <div className='row'>
            <div className='col-4'>
                <p className={`${classes.title} ms-4`}>Location</p>
                <p className={`${classes.placeholder} me-2`}>Select the city</p>
                <select className={`${classes.select} w-100`}>
                    <option></option>
                </select>
            </div>
            <div className='col-4 align-items-center justify-content-center'>
                <p className={`${classes.title} ms-4`}>Brand</p>
                <p className={`${classes.placeholder} me-2`}>Select the brand</p>
                <select className={`${classes.select} w-100`}>
                    <option></option>
                </select>
            </div>
            <div className='col-4'>
                <p className={`${classes.title} ms-4`}>Model</p>
                <p className={`${classes.placeholder} me-2`}>Select the model</p>
                <select className={`${classes.select} w-100`}>
                    <option></option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default BrandFilter