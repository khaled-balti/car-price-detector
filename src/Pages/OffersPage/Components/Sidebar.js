import React from 'react'
import classes from './Sidebar.module.css'
const Sidebar = () => {
  return (
    <div className={classes.bigcontainer}>
        <div className={`${classes.section} ms-5 mt-4 mb-5 d-flex flex-column justify-content-between`}>
            <p className={classes.type}>TYPE</p>
            <div>
                <input type='checkbox' id='sport' name='sport' className={`${classes.checkbox} me-2`} />
                <label htmlFor='sport' className={classes.label} >Sport</label>
            </div>
            <div>
                <input type='checkbox' id='suv' name='suv' className={`${classes.checkbox} me-2`} />
                <label htmlFor='suv' className={classes.label} >SUV</label>
            </div>
            <div>
                <input type='checkbox' id='mpv' name='mpv' className={`${classes.checkbox} me-2`} />
                <label htmlFor='mpv' className={classes.label} >MPV</label>
            </div>
            <div>
                <input type='checkbox' id='sedan' name='sedan' className={`${classes.checkbox} me-2`} />
                <label htmlFor='sedan' className={classes.label} >Sedan</label>
            </div>
            <div>
                <input type='checkbox' id='coupe' name='coupe' className={`${classes.checkbox} me-2`} />
                <label htmlFor='coupe' className={classes.label} >Coupe</label>
            </div>
            <div>
                <input type='checkbox' id='hatchback' name='hatchback' className={`${classes.checkbox} me-2`} />
                <label htmlFor='hatchback' className={classes.label} >Hatchback</label>
            </div>
        </div>
        <div className={`${classes.section1} ms-5 mt-4 d-flex flex-column justify-content-between`}>
            <p className={classes.type}>CAPACITY</p>
            <div>
                <input type='checkbox' id='person2' name='person2' className={`${classes.checkbox} me-2`} />
                <label htmlFor='person2' className={classes.label} >2 Persons</label>
            </div>
            <div>
                <input type='checkbox' id='person4' name='person4' className={`${classes.checkbox} me-2`} />
                <label htmlFor='person4' className={classes.label} >4 Persons</label>
            </div>
            <div>
                <input type='checkbox' id='person6' name='person6' className={`${classes.checkbox} me-2`} />
                <label htmlFor='person6' className={classes.label} >6 Persons</label>
            </div>
            <div>
                <input type='checkbox' id='person8' name='person8' className={`${classes.checkbox} me-2`} />
                <label htmlFor='person8' className={classes.label} >8 Persons +</label>
            </div>
        </div>
        <div className={`${classes.section2} ms-5 px-0 mt-4 d-flex flex-column justify-content-between`}>
            <p className={`${classes.type}`}>PRICE</p>
            <div className={`${classes.price}`}>
                <input type='number' id='minprice' name='minprice' defaultValue={0} min={0} max={500000} step={100} className={`w-50 d-flex justify-content-center align-items-center ps-2 me-3 ${classes.number}`} />
                <label htmlFor='minprice' className={classes.label1} >Min</label>
            </div>
            <div className={`${classes.price}`} >
                <input type='number' id='maxprice' name='maxprice' defaultValue={500000} min={0} max={500000} step={100} className={`w-50 d-flex justify-content-center align-items-center ps-2 me-3 ${classes.number}`} />
                <label htmlFor='maxprice' className={classes.label1} >Max</label>
            </div>
        </div>
    </div>
  )
}

export default Sidebar