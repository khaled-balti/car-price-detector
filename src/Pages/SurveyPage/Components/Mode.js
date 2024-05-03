import React, {useState} from 'react'
import classes from './Mode.module.css'
import Stepper from './Stepper'
import Buyer from '../../../images/buyer.png'
import Dollar from '../../../images/dollar.png'
import Car from '../../../images/car.png'
const Mode = ({step, setStep}) => {
  const [modeChecked, setModeChecked] = useState(1)
  return (
    <div className='d-flex flex-column align-items-center'>
      <h4 className={`${classes.title} mx-5 mb-4 px-0 py-5`}>Are you currently selling/buying a car ?</h4>
      <Stepper step={step} />
      <div className='container d-flex justify-content-between align-items-center mt-4 pb-5' style={{paddingLeft: '60px', paddingRight: '60px'}}>
        <div onClick={() => {setModeChecked(1)}} className={`d-flex flex-column justify-content-evenly align-items-center ${classes.cont}`} style={{backgroundColor: modeChecked === 1 && '#E7E9FF'}}>
          <p className={classes.mode}>Buyer</p>
          <img src={Buyer} alt='buyer' className={classes.img} />
          <img src={Dollar} alt='dollar' className={classes.logoimg1} />
          <input type='radio' name='mode' checked={modeChecked === 1} className={classes.radio} />
        </div>
        <div onClick={() => {setModeChecked(2)}} className={`d-flex flex-column justify-content-evenly align-items-center ${classes.cont}`} style={{backgroundColor: modeChecked === 2 && '#E7E9FF'}} >
          <p className={classes.mode}>Seller</p>
          <img src={Buyer} alt='seller' className={classes.img} />
          <img src={Car} alt='car' className={classes.logoimg2}  />
          <input type='radio' name='mode' checked={modeChecked === 2} className={classes.radio} />
        </div>
      </div>
      <div className={classes.line}></div>
      <div className='d-flex justify-content-end' style={{width: '85%'}}>
        <button className={classes.next} onClick={() => setStep(prev => prev + 1)}>Next</button>
      </div>
    </div>
  )
}

export default Mode