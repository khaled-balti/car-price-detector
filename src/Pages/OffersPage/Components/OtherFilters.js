import React from 'react'
import classes from './OtherFilters.module.css'
const OtherFilters = () => {
  return (
    <div className={`container-fluid ${classes.bigContainer} py-4`}>
        <div className='row'>
            <div className='col-4 d-flex flex-column align-items-center'>
                <p className={classes.title}>Price</p>
                <input className={classes.radio} type='radio' name='filter' />
            </div>
            <div className='col-4 d-flex flex-column align-items-center'>
                <p className={classes.title}>DOM</p>
                <input className={classes.radio} type='radio' name='filter' />
            </div>
            <div className='col-4 d-flex flex-column align-items-center'>
                <p className={classes.title}>AD</p>
                <input className={classes.radio} type='radio' name='filter' />
            </div>
        </div>
    </div>
  )
}

export default OtherFilters